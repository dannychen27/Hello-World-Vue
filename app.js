// A Vue instance.
// it controls part of our app.
new Vue({
    el: '#vue-app',
    data: {
        name: 'Danny',
        job: 'Software Artist'
    },
    methods: {
        // output a greeting to the DOM
        greet: function (timeOfDay) {
            return "Good " + timeOfDay + ", " + this.name;
        }
    },
});