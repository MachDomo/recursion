// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// MDN Description of JSON.stringify:
// Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.

// If undefined, a function, or a symbol is encountered during conversion it is either omitted 
// (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify 
// can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).

// All symbol-keyed properties will be completely ignored, even when using the replacer function.

// Non-enumerable properties will be ignored

var stringifyJSON = function(obj) {
  // your code goes here
  /* Plan: We know this problem uses recursion
    1. Convert Boolean, number, and string objects
       if any of these objects, use toString() to convert
  */
  // Functions
  var stringifyObject = function(keyValues) {
        var valuePair = keyValues.shift();
        if (typeof valuePair[1] === 'function' || typeof valuePair[1] === 'undefined') {
          if(keyValues.length === 0) {
            return '';
          } else {
            return stringifyObject(keyValues);
          }
        } 
        var stringObject = stringifyJSON(valuePair[0]) + ':' + stringifyJSON(valuePair[1]);
        if (keyValues.length !== 0) {

          stringObject += ',' + stringifyObject(keyValues);
        }
        return stringObject;
      };

  var stringifyArray = function (obj) {
      var element = obj.shift();
      // Base Case
      if (element === undefined || element.length === 0 && obj.length === 0) {
        return '';   
      } else {
        element = stringifyJSON(element);
        if(obj.length !== 0) {
          var nextElement = ',' + stringifyArray(obj);
          element = element + nextElement;
        }
      }
      return element;
    };    

  // Conditionals
  if (typeof obj === 'undefined' || typeof obj === 'function') {
  // if you get undefined or a function skip these somehow
    return '';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString(); 
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  // For Arrays
  if (Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    }
    return '[' + stringifyArray(obj) + ']';
    }

  // For Objects
  if (typeof obj === 'object') {
    var keyValues = Object.entries(obj);  
    if (keyValues.length === 0) {
      return '{}';
    }
    return '{' + stringifyObject(keyValues) + '}';
  }
  
};

    
  

/*


var stringifyJSON = function(obj) {
/*
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];





};

*/