function select(selector) {
  // Implement this function. Use the provided test file to see how should this behave.
  // Do not use `document.querySelector`, `document.querySelectorAll`, or any library.
  // For coding style, we prefer functional programming, and simplicity.

  // Your solution should only consider the test cases, any other behaviour is out of scope.

  // When it's done, rename this file to `UI Assignment - <your name>.txt`,
  // and email it back.
  var strArr = selector.split(" ");
  var doc = document;
  if (strArr.length > 1) {
    for (const item of strArr) {
      doc = getSelectorValue(doc, item);
      console.log(doc);
    }
    return doc;
  } else {
    return getSelectorValue(doc, selector);
  }
}

function getSelectorValue(doc, selector) {
  switch (selector[0]) {
    case '.':
      return classSelector(doc, selector);
    case '#':
      return idSelector(doc, selector);
    default:
      return tagSelector(doc, selector);
  }
}

function classSelector(doc, selector) {
  var results = [];
  var index=selector.indexOf(".");
  var className = selector.slice(index+1,selector.length);
  var elements = doc.getElementsByClassName(className);
  for (const item of elements) {
    results.push(item);
  }
  return results;
}

function idSelector(doc, selector) {
  var results = [];
  var index=selector.indexOf("#");
  var idName = selector.slice(index+1,selector.length);
  results.push(doc.getElementById(idName));
  return results;
}

function tagSelector(doc, selector) {
  var results = [];
  var tagName = selector.slice(0, selector.length);
  var elements = doc.getElementsByTagName(tagName);
  for (const item of elements) {
    results.push(item);
  }
  return results;
}

module.exports = select;