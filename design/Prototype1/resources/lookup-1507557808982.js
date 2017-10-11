(function(window, undefined) {
  var dictionary = {
    "f0faf42f-0ddc-435b-99e2-3e9cc79e78d2": "Settings",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "StartPage",
    "5aa7a7f8-5e3b-4124-8a52-ebf9512a6b37": "MainScreen",
    "ed358f54-e528-491a-aec9-a06eedc1a9c7": "LogSignIn",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);