import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import { createRecipe } from '../graphql/mutations';

export default Controller.extend({
  amplify: service(),
  graphqlOperation: reads('amplify.graphqlOperation'),
  name: '',

  init() {
    this._super(...arguments);
    this.errors = [];
  },

  actions: {
    async createRecipe() {
      let recipe = { name: this.name };
      try {
        await this.amplify.API.graphql(this.graphqlOperation(createRecipe, { input: recipe }));
      } catch (error) {
        if (error.errors) {
          this.errors.setObjects(error.errors.map(e => e.message));
        } else {
          this.errors.setObjects([error]);
        }
      }
    }
  }
});
