import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    submit(e) {
      e.preventDefault();
      if (this.onSubmit) {
        this.onSubmit();
      }
    }
  }
});
