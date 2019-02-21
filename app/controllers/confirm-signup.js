import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  amplify: service(),
  queryParams: ['username'],
  username: '',
  code: '',

  init() {
    this._super(...arguments);
    this.errors = [];
  },

  actions: {
    async confirm () {
      let { username, code } = this;
      try {
        let result = await this.amplify.Auth.confirmSignUp(username, code);
        if (result === "SUCCESS") {
          this.transitionToRoute('login');
        }
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
