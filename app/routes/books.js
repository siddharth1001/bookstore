import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('book');
  // }

  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    // console.log(params);
    return this.store.query('book', params);
  },

  actions: {

    showAll() {
      const total = this.controllerFor('books').get('total');
      this.transitionTo({ queryParams: { limit: total, sid: 'onShowAll' }});
    }
  }
});
