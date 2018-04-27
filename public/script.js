new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [],
    cart: [],
    search: ''
  },
  methods: {
    onSubmit: function(){
      this.$http.get('/search/' + this.search)
        .then(function(res){
          this.items = res.data
      })
    },
    addItem: function(index){
      var item = this.items[index];

      var existingItem = false;
      for(var i=0; i< this.cart.length; i++) {
        if(this.cart[i].id == item.id) {
          this.cart[i].quantity++;
          existingItem = true;
          break;
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
            break;
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