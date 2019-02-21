import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  amplify: service(),
  username: '',
  password: '',
  email: '',

  init() {
    this._super(...arguments);
    this.errors = [];
  },

  actions: {
    async signup () {
      let { username, password, email, phoneNumber } = this;
      let signUpInfo = {
        username,
        password,
        attributes: {
          email,
          phone_number: phoneNumber
        }
      };
      try {
        let result = await this.amplify.Auth.signUp(signUpInfo);
        this.transitionToRoute('confirm-signup', { queryParams: { username: result.user.username } });
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
