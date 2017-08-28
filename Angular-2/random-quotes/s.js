(function() {
  // aliases
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();

  // components and classes for components
  var secondComponent = Component({
    selector: 'scnd',
    template: '<p>{{quote.line}}<p><br/><p>{{quote.author}}</p>'
  })
  .Class({
    constructor: function(){
      var randomIndex = Math.floor(Math.random()*quotes.length);
      this.quote = quotes[randomIndex];
    }
  });

  var AppComponent = Component({
    selector: 'my-app',
    template: `<h1>Angular 2.0. Hello World!</h1> <scnd></scnd>`
    // or we can write it using '' + ''
  })
  .Class({
    constructor: function(){}
  });

// AppModule and its class
  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, secondComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function(){}
  })

// Bootstrap
  platformBrowserDynamic.bootstrapModule(AppModule);

// quote's example
var quotes = [
  {
  "line": "bla bla bla",
  "author": "unknow"
  },
  {
  "line": "keep calm and do mess around",
  "author": "unknow2"
  },
  {
  "line": "a+b=c",
  "author": "unknow3"
  },
  {
  "line": "Marry has a little lamb...",
  "author": "unknow4"
  },
];

})();
