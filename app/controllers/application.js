import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    async signout() {
      await this.session.signout();
      this.transitionToRoute('login');
    }
  }
});
