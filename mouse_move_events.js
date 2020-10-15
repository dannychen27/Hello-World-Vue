new Vue({
    el: '#vue-app',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});