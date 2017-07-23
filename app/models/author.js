// import DS from 'ember-data';
//
// export default DS.Model.extend({
//   name: DS.attr('string'),
//   books: DS.hasMany('book')
// });
import DS from 'ember-data';
import Publisher from './publisher';
// import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  books: DS.hasMany('book'),

  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
});
