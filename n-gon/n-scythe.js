function runLoader() {
  var scriptId = 'n-scythe-loader';
  if (document.getElementById(scriptId)) {
    console.log("Loader script already loaded.");
    return;
  }
  var script = document.createElement('script');
  script.id = scriptId;
  script.src = 'https://raw.githubusercontent.com/Whyisthisnotavalable/n-scythe/main/loader.js';
  document.body.appendChild(script);
}
