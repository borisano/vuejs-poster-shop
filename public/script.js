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
    }
  },
  filters: {
    currency: function(price) {

      return '$'+ price.toFixed(2);
    }
  }
});