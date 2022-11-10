var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let child of startEl.children) {
    let partialsResults = traverseDomAndCollectElements(matchFunc, child);    
    resultSet = [...resultSet, ...partialsResults];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // if (selector[0] === '#') return 'id';
  if (selector.charAt(0) === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.')) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (el) => el.id && (el.id === selector.replace('#', ''));      
  } else if (selectorType === "class") {
    //matchFunction = (el) => el.className && (el.className.split(" ").includes(selector.replace('.', '')));   
    matchFunction = (el) => el.classList.contains(selector.slice(1));      
  } else if (selectorType === "tag") {
    matchFunction = (el) => el.tagName === selector.toUpperCase();
  } else if (selectorType === "tag.class") {
    //matchFunction = (el) => el.tagName && (el.getAttribute('class').split(" ").includes(selector.replace(el.tagName.toLowerCase()+'.', '')));
    matchFunction = (el) => {
      const [tagName, className] = selector.split(".");
      return matchFunctionMaker(tagName)(el) && matchFunctionMaker('.' + className)(el); 
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
