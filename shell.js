/**
 * Javascript Shell. A really simple javascript shell to teach some of the Javascript
 * Languaje's Object Oriented features and access to the DOM.
 *
 * @param {Object} attr An associative array containing the DOM id's of the text input and text outputs 
 */
var JsShell = function(attr) {
  const NO_CODE_MESSAGE = "There's no code to execute!";
  if (!attr['codeId'] || !attr['resultId'] || !attr['errorsId']) {
    return null;
  }
  var code = document.getElementById(attr['codeId']);
  var result = document.getElementById(attr['resultId']);
  var errors = document.getElementById(attr['errorsId']);

  this.clean = function() {
    result.value = '';
    errors.value = ''; 
  }

  this.execute = function() {
    this.clean();
    if (code.value.trim() == '') {
      alert(NO_CODE_MESSAGE);
    } else {
      try {
        result.value = eval(code.value);
      } catch (error) {
        errors.value = error;
      }
    }
  }
};

/**
 * Shell initializing
 */
var init = function() {
  var myShell = new JsShell({codeId: 'code', resultId: 'result', errorsId: 'errors'});
  var button = document.getElementById("button");
  if (button.addEventListener) {
    button.addEventListener('click', function(){myShell.execute()}, false);
  } else if (button.attachEvent) {
    button.attachEvent('click', function(){myShell.execute()});
  }
}

/* Load event registration */
if (addEventListener) {
  addEventListener('load', init, false);
} else if (attachEvent) {
  attachEvent('load', init);
}
