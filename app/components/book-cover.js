import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    open() {
      // this.set('isShowingModal', true);
      // this.get('blurBackground')(true);

      //changed to one below coz : we will make sure we get the latest price when opening the modal by reload()ing the model
      //We are opening a modal in which we show the price, initially loaded with each book.
      //As an online shop, it is imperative to show the latest price to the customer!
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
        this.get('blurBackground')(true);
      });

      // we can use background-reload as false ?
    },

    close() {
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    }

  }

});
