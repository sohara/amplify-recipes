import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  amplify: service(),
  username: '',
  password: '',
  init() {
    this._super(...arguments);
    this.errors = [];
  },

  actions: {
    async login () {
      let { username, password } = this;
      try {
        await this.amplify.Auth.signIn(username, password);
        this.transitionToRoute('index');
      } catch (error) {
        if (error.message) {
          this.errors.setObjects([error.message]);
        } else {
          this.errors.setObjects([error]);
        }
      }
    }
  }
});
