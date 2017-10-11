(function(window, undefined) {
  var dictionary = {
    "91b3d0f1-7e21-494e-b59e-bb38dd3b24f9": "Settings",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "StartScreen",
    "fdff255f-c8f7-4a5e-a7c0-ad8f1a92b9c0": "MainScreen",
    "2ac94d87-67d0-42dd-ad7e-b8f6d46683b7": "LogSignIn",
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