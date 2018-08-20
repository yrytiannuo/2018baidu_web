console.log("hello world!");
var MyApp = san.defineComponent({
    template: '<h2>Hello {{name}}!</h2>',

    initData: function () {
        return {
            name: 'noe'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);