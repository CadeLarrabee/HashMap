/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedListModule.js":
/*!*********************************!*\
  !*** ./src/linkedListModule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _nodeModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeModule.js */ "./src/nodeModule.js");

class LinkedList {
  constructor(nodes) {
    //if we needed multiple lists this would need an id system
    //this.id = id;
    this.nodes = nodes ? nodes : [];
  }
  append(value) {
    //Add a new node containing the value to the end.
    //const newTask = new Task(id, name, ...);
    const newNode = new _nodeModule_js__WEBPACK_IMPORTED_MODULE_0__.Node(value, null, this.nodes[this.nodes.length - 1]);
    this.nodes.push(newNode);
  }
  prepend(value) {
    //Add the nextNode as the current head
    const newNode = new _nodeModule_js__WEBPACK_IMPORTED_MODULE_0__.Node(value, this.nodes[0], null);

    if (this.nodes.length === 0) {
      // If the list is empty, set the new node as both head and tail
      this.nodes.push(newNode);
    } else {
      //Set the previous node to the new head.
      this.nodes[0].setPrevNode(newNode);
      //Shift the nodes down. Thanks array functions!
      this.nodes.unshift(newNode);
    }
  }
  size() {
    //return the total number of nodes
    return this.nodes.length;
  }
  head() {
    //return the first node
    if (this.nodes[0] == null) {
      return null;
    } else return this.nodes[0];
  }
  tail() {
    //return the last node.
    linkedListLength = this.nodes.length;
    if (this.nodes[linkedListLength - 1] == null) {
      return null;
    } else return this.nodes[linkedListLength - 1];
  }
  at(index) {
    //return the value at a specific index in the linked list
    return this.nodes[index];
  }
  pop() {
    //removes the last value from the list.
    this.nodes.pop();
  }
  contains(value) {
    //returns true if the passed in value is in the list, otherwise false
    this.nodes.array.forEach((element) => {
      if (element.getData() === value) {
        return true;
      }
    });
    return false;
  }
  find(value) {
    //return the index where value is found, otherwise false.
    //Don't use forEach here, it can't give you the index.
    //Instead, arrays have a built in function for
    // finding an index that satisfies some search query.
    const index = this.nodes.findIndex((node) => node.getData() === value);
    return index !== -1 ? index : false;
  }
  toString() {
    //print object as a string node by node.
    this.nodes.array.forEach((element) => {
      console.log("[" + element.getData() + "] =>");
    });
  }
}


/***/ }),

/***/ "./src/nodeModule.js":
/*!***************************!*\
  !*** ./src/nodeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  //
  //A node is a basic data structure that knows two things.
  //What its connected to, behind it, and ahead of it. "next" and "previous"
  //what data it stores,
  //Whether it is a head node, or a tail node.
  //Tail nodes have no next, and head nodes have no previous.
  //
  constructor(Data, nextNode, prevNode) {
    Data = this.data;
    nextNode = this.nextNode;
    prevNode = this.prevNode;
  }
  displayNodeDetails() {
    console.log(this.Data, this.nextNode, this.prevNode);
  }
  //
  // Getters
  //

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.nextNode;
  }

  getPrevNode() {
    return this.prevNode;
  }

  //
  // Setters
  //

  setData(data) {
    this.data = data;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  setPrevNode(prevNode) {
    this.prevNode = prevNode;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedListModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedListModule.js */ "./src/linkedListModule.js");


function OnEntry() {
  //Generate a linked list here.
  const linkedList = new _linkedListModule_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
  //const nodeOne = new Node(18,null,null);
  //const nodeTwo = new Node(44, null, null);
  //const nodeThree = new Node(2, null, null);

  linkedList.append(18);
  linkedList.append(44);
  linkedList.append(2);
  linkedList.toString();
}

OnEntry();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFJOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0VPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUQ7O0FBRW5EO0FBQ0E7QUFDQSx5QkFBeUIsNERBQVU7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbGlua2VkTGlzdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbm9kZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVNb2R1bGUuanNcIjtcbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAvL2lmIHdlIG5lZWRlZCBtdWx0aXBsZSBsaXN0cyB0aGlzIHdvdWxkIG5lZWQgYW4gaWQgc3lzdGVtXG4gICAgLy90aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzID8gbm9kZXMgOiBbXTtcbiAgfVxuICBhcHBlbmQodmFsdWUpIHtcbiAgICAvL0FkZCBhIG5ldyBub2RlIGNvbnRhaW5pbmcgdGhlIHZhbHVlIHRvIHRoZSBlbmQuXG4gICAgLy9jb25zdCBuZXdUYXNrID0gbmV3IFRhc2soaWQsIG5hbWUsIC4uLik7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBudWxsLCB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV0pO1xuICAgIHRoaXMubm9kZXMucHVzaChuZXdOb2RlKTtcbiAgfVxuICBwcmVwZW5kKHZhbHVlKSB7XG4gICAgLy9BZGQgdGhlIG5leHROb2RlIGFzIHRoZSBjdXJyZW50IGhlYWRcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUsIHRoaXMubm9kZXNbMF0sIG51bGwpO1xuXG4gICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiB0aGUgbGlzdCBpcyBlbXB0eSwgc2V0IHRoZSBuZXcgbm9kZSBhcyBib3RoIGhlYWQgYW5kIHRhaWxcbiAgICAgIHRoaXMubm9kZXMucHVzaChuZXdOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9TZXQgdGhlIHByZXZpb3VzIG5vZGUgdG8gdGhlIG5ldyBoZWFkLlxuICAgICAgdGhpcy5ub2Rlc1swXS5zZXRQcmV2Tm9kZShuZXdOb2RlKTtcbiAgICAgIC8vU2hpZnQgdGhlIG5vZGVzIGRvd24uIFRoYW5rcyBhcnJheSBmdW5jdGlvbnMhXG4gICAgICB0aGlzLm5vZGVzLnVuc2hpZnQobmV3Tm9kZSk7XG4gICAgfVxuICB9XG4gIHNpemUoKSB7XG4gICAgLy9yZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBub2Rlc1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aDtcbiAgfVxuICBoZWFkKCkge1xuICAgIC8vcmV0dXJuIHRoZSBmaXJzdCBub2RlXG4gICAgaWYgKHRoaXMubm9kZXNbMF0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHJldHVybiB0aGlzLm5vZGVzWzBdO1xuICB9XG4gIHRhaWwoKSB7XG4gICAgLy9yZXR1cm4gdGhlIGxhc3Qgbm9kZS5cbiAgICBsaW5rZWRMaXN0TGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XG4gICAgaWYgKHRoaXMubm9kZXNbbGlua2VkTGlzdExlbmd0aCAtIDFdID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSByZXR1cm4gdGhpcy5ub2Rlc1tsaW5rZWRMaXN0TGVuZ3RoIC0gMV07XG4gIH1cbiAgYXQoaW5kZXgpIHtcbiAgICAvL3JldHVybiB0aGUgdmFsdWUgYXQgYSBzcGVjaWZpYyBpbmRleCBpbiB0aGUgbGlua2VkIGxpc3RcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1tpbmRleF07XG4gIH1cbiAgcG9wKCkge1xuICAgIC8vcmVtb3ZlcyB0aGUgbGFzdCB2YWx1ZSBmcm9tIHRoZSBsaXN0LlxuICAgIHRoaXMubm9kZXMucG9wKCk7XG4gIH1cbiAgY29udGFpbnModmFsdWUpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGluIHRoZSBsaXN0LCBvdGhlcndpc2UgZmFsc2VcbiAgICB0aGlzLm5vZGVzLmFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldERhdGEoKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZpbmQodmFsdWUpIHtcbiAgICAvL3JldHVybiB0aGUgaW5kZXggd2hlcmUgdmFsdWUgaXMgZm91bmQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAvL0Rvbid0IHVzZSBmb3JFYWNoIGhlcmUsIGl0IGNhbid0IGdpdmUgeW91IHRoZSBpbmRleC5cbiAgICAvL0luc3RlYWQsIGFycmF5cyBoYXZlIGEgYnVpbHQgaW4gZnVuY3Rpb24gZm9yXG4gICAgLy8gZmluZGluZyBhbiBpbmRleCB0aGF0IHNhdGlzZmllcyBzb21lIHNlYXJjaCBxdWVyeS5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMubm9kZXMuZmluZEluZGV4KChub2RlKSA9PiBub2RlLmdldERhdGEoKSA9PT0gdmFsdWUpO1xuICAgIHJldHVybiBpbmRleCAhPT0gLTEgPyBpbmRleCA6IGZhbHNlO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIC8vcHJpbnQgb2JqZWN0IGFzIGEgc3RyaW5nIG5vZGUgYnkgbm9kZS5cbiAgICB0aGlzLm5vZGVzLmFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1wiICsgZWxlbWVudC5nZXREYXRhKCkgKyBcIl0gPT5cIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgLy9cbiAgLy9BIG5vZGUgaXMgYSBiYXNpYyBkYXRhIHN0cnVjdHVyZSB0aGF0IGtub3dzIHR3byB0aGluZ3MuXG4gIC8vV2hhdCBpdHMgY29ubmVjdGVkIHRvLCBiZWhpbmQgaXQsIGFuZCBhaGVhZCBvZiBpdC4gXCJuZXh0XCIgYW5kIFwicHJldmlvdXNcIlxuICAvL3doYXQgZGF0YSBpdCBzdG9yZXMsXG4gIC8vV2hldGhlciBpdCBpcyBhIGhlYWQgbm9kZSwgb3IgYSB0YWlsIG5vZGUuXG4gIC8vVGFpbCBub2RlcyBoYXZlIG5vIG5leHQsIGFuZCBoZWFkIG5vZGVzIGhhdmUgbm8gcHJldmlvdXMuXG4gIC8vXG4gIGNvbnN0cnVjdG9yKERhdGEsIG5leHROb2RlLCBwcmV2Tm9kZSkge1xuICAgIERhdGEgPSB0aGlzLmRhdGE7XG4gICAgbmV4dE5vZGUgPSB0aGlzLm5leHROb2RlO1xuICAgIHByZXZOb2RlID0gdGhpcy5wcmV2Tm9kZTtcbiAgfVxuICBkaXNwbGF5Tm9kZURldGFpbHMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5EYXRhLCB0aGlzLm5leHROb2RlLCB0aGlzLnByZXZOb2RlKTtcbiAgfVxuICAvL1xuICAvLyBHZXR0ZXJzXG4gIC8vXG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0TmV4dE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dE5vZGU7XG4gIH1cblxuICBnZXRQcmV2Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2Tm9kZTtcbiAgfVxuXG4gIC8vXG4gIC8vIFNldHRlcnNcbiAgLy9cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgc2V0TmV4dE5vZGUobmV4dE5vZGUpIHtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cblxuICBzZXRQcmV2Tm9kZShwcmV2Tm9kZSkge1xuICAgIHRoaXMucHJldk5vZGUgPSBwcmV2Tm9kZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSBcIi4vbGlua2VkTGlzdE1vZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBPbkVudHJ5KCkge1xuICAvL0dlbmVyYXRlIGEgbGlua2VkIGxpc3QgaGVyZS5cbiAgY29uc3QgbGlua2VkTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIC8vY29uc3Qgbm9kZU9uZSA9IG5ldyBOb2RlKDE4LG51bGwsbnVsbCk7XG4gIC8vY29uc3Qgbm9kZVR3byA9IG5ldyBOb2RlKDQ0LCBudWxsLCBudWxsKTtcbiAgLy9jb25zdCBub2RlVGhyZWUgPSBuZXcgTm9kZSgyLCBudWxsLCBudWxsKTtcblxuICBsaW5rZWRMaXN0LmFwcGVuZCgxOCk7XG4gIGxpbmtlZExpc3QuYXBwZW5kKDQ0KTtcbiAgbGlua2VkTGlzdC5hcHBlbmQoMik7XG4gIGxpbmtlZExpc3QudG9TdHJpbmcoKTtcbn1cblxuT25FbnRyeSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9