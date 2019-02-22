import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import { listRecipes } from '../graphql/queries';

export default Route.extend({
  amplify: service(),
  graphqlOperation: reads('amplify.graphqlOperation'),

  async model() {
    let result = await this.amplify.API.graphql(this.graphqlOperation(listRecipes));
    return result.data.listRecipes.items;
  }

});
