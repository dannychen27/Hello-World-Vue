var data = {
    name: "Yoshi"
}

Vue.component("greeting", {
    template: "<p>Hey there, I am {{ name }}. <button v-on:click='changeName'>Change Name</button></p>",
    data: function () {
        return {
            name: "Yoshi" // if we return data instead, all instances change to Mario on click
        }
    },
    methods: {
        changeName: function () {
            this.name = "Mario";
        }
    }
});

new Vue({
    el: "#vue-app-one"
});

new Vue({
    el: "#vue-app-two"
});