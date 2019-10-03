function select(selector) {
  // Implement this function. Use the provided test file to see how should this behave.
  // Do not use `document.querySelector`, `document.querySelectorAll`, or any library.
  // For coding style, we prefer functional programming, and simplicity.

  // Your solution should only consider the test cases, any other behaviour is out of scope.

  // When it's done, rename this file to `UI Assignment - <your name>.txt`,
  // and email it back.
  var strArr = selector.split(" ");
  var doc = new Array(document);
  if (strArr.length > 1) {
    for (const item of strArr) {
      doc = getSelectorValue(doc, item);
    }
    return doc;
  } else {
    return getSelectorValue(doc, selector);
  }
}

/**
 * Decision maker for selectors
 * @param {*} doc 
 * @param {*} selector 
 */
function getSelectorValue(doc, selector) {
  var SelectorType = null;
  var modSelector=[];
  var modSelectorClass=selector.split(".");
  var modSelectorId=selector.split("#");
  if(modSelectorClass.length > 1){
    SelectorType = "CLASS";
    modSelector=modSelectorClass;
  } else if (modSelectorId.length > 1) {
    SelectorType = "ID";
    modSelector=modSelectorId;
  } else {
    SelectorType = null;
  }
  switch (SelectorType) {
    case 'CLASS':
      return classSelector(doc, modSelector[1]);
    case 'ID':
      return idSelector(doc, modSelector[1]);
    default:
      return tagSelector(doc, selector);
  }
}

/**
 * Class Selector Value returner
 * @param {*} doc 
 * @param {*} selector 
 */
function classSelector(doc, selector) {
  var results = [];
  for (const itm of doc) {
    var elements = itm.getElementsByClassName(selector);
    for (const item of elements) {
      results.push(item);
    }
  }
  return results;
}
/**
 * Id Selector Value returner
 * @param {*} doc 
 * @param {*} selector 
 */
function idSelector(doc, selector) {
  var results = [];
  for (const itm of doc) {
    results.push(itm.getElementById(selector));
  }
  return results;
}
/**
 * Tag Selector Value returner
 * @param {*} doc 
 * @param {*} selector 
 */
function tagSelector(doc, selector) {
  var results = [];
  for (const itm of doc) {
    var elements = itm.getElementsByTagName(selector);
    for (const item of elements) {
      results.push(item);
    }
  }
  return results;
}

module.exports = select;