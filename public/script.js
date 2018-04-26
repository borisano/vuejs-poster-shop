new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [
      {id: 1, title: 'item 1', price: 9.09},
      {id: 2, title: 'item 2', price: 2.45},
      {id: 3, title: 'item 3', price: 3.21}
    ],
    cart: []
  },
  methods: {
    addItem: function(index){
      var item = this.items[index];

      var existingItem = false;
      for(var i=0; i< this.cart.length; i++) {
        if(this.cart[i].id == item.id) {
          this.cart[i].quantity++;
          existingItem = true;
        }
      }

      if(! existingItem ) {
        this.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1
        });
      }

      this.total += item.price;
    },
    inc: function(item) {
      item.quantity++;
      this.total += item.price;
    },
    dec: function(item) {
      item.quantity--;
      this.total -= item.price;

      if(item.quantity < 1) { // If it was the last item
        // Remove particular item from cart
        for(i=0; i<this.cart.length; i++) {
          if(this.cart[0].id == item.id) {
            this.cart.splice(i,1);
          }
        }
      }
    }
  },
  filters: {
    currency: function(price) {

      return '$'+ price.toFixed(2);
    }
  }
});