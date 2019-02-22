import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  amplify: service(),
  session: service(),

  async beforeModel() {
    try {
      let user = await this.amplify.Auth.currentAuthenticatedUser();
      this.session.load(user.username, user.signInUserSession.accessToken.jwtToken, user.attributes);
    } catch (error) {
      this.transitionTo('signin');
    }
  }
});
