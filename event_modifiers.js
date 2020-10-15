new Vue({
    el: '#vue-app',
    data: {
        age: 25
    },
    methods: {
        add: function (increment) {
            this.age += increment;
        },

        subtract: function (decrement) {
            this.age -= decrement;
        },

        click: function () {
            alert("You clicked me!");    
        }
    }
});