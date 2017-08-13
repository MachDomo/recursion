// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  /*
  The getElementsByClassName() method returns a collection of all elements in the document with the
   specified class name, as a NodeList object.

 The NodeList object represents a collection of nodes.
 The nodes can be accessed by index numbers. The index starts at 0.

Tip: You can use the length property of the NodeList object to determine the number
 of elements with a specified class name, then you can loop through all elements and extract the info you want.

Maybe search element.classList /element.className using element.childNodes
document.body.childNodes[x].classList
*/
var nodeList = document.body.childNodes;
var result = [];

var recursive = function(nodeList) {
	if (nodeList.childNodes.length !== )

}

if(nodeList.length)





};
