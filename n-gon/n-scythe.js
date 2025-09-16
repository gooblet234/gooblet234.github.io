  function runLoader() {
    var r = new XMLHttpRequest();
    r.open("GET", 'https://raw.githubusercontent.com/Whyisthisnotavalable/n-scythe/main/loader.js', true);
    r.onloadend = function(oEvent) {
      new Function(r.responseText)();
    };
    r.send();
  }
