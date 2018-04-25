new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [
      {title: 'item 1', price: 1},
      {title: 'item 2', price: 2},
      {title: 'item 3', price: 3}
    ],
    cart: []
  },
  methods: {
    addItem: function(index){
      var item = this.items[index];

      this.total += item.price;
      this.cart.push(item);
    }
  }
});