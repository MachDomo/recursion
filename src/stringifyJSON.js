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
 var result = '';

 
    // Conditionals
    if (typeof obj === 'undefined' || typeof obj === 'function') {
      result = undefined;
    }
    if (obj === null) {
      return 'null';
    }
    if (typeof obj === 'boolean' || typeof obj === 'number') {
      result = obj.toString();  
    }
    if (typeof obj === 'string') {
      result = '"' + obj + '"';
    }

    // Base Case
    
    // Recursive Case


    
    
    if (Array.isArray(obj)) {

      // Base Case
      if (obj.length === 0) {
      // return complete array string
      } else {
        // Recursion Case
        // Should somehow make obj.length shorter - shift()
      }
      
    }

    return result;
  


};
