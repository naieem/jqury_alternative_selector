function select(selector) {
  // Implement this function. Use the provided test file to see how should this behave.
  // Do not use `document.querySelector`, `document.querySelectorAll`, or any library.
  // For coding style, we prefer functional programming, and simplicity.

  // Your solution should only consider the test cases, any other behaviour is out of scope.

  // When it's done, rename this file to `UI Assignment - <your name>.txt`,
  // and email it back.
  if (selector[0] == '.') {
    var className = selector.slice(1, selector.length);
    var elements=document.getElementsByClassName(className);
    return elements;
  }else if (selector[0] == '#') {
    var results=[];
    var idName = selector.slice(1, selector.length);
    results.push(document.getElementById(idName));
    return results;
  }
  else{
    var tagName = selector.slice(0, selector.length);
    var elements=document.getElementsByTagName(tagName);
    return elements;
  }

  throw Error('unimplemented');
}

module.exports = select;
