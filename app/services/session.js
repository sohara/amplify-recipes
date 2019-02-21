import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  amplify: service(),

  username: null,
  attributes: null,
  accessToken: null,
  load(username, accessToken, attributes) {
    this.setProperties({ username, accessToken, attributes });
  },

  signout() {
    return this.amplify.Auth.signOut().then(() => {
      let username = null;
      let attributes = null;
      let accessToken = null;
      this.setProperties({ username, accessToken, attributes });
    })


  }

});
