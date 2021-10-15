const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// let ListNode = function (x) {
//   this.value = x;
//   this.next = null;
// }

//  function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);

let count = 0;
let list;
 
module.exports = function removeKFromList(l, k) {
  if (!count){
    list = {
      ...l
    }
  }

  if (l.next !== null){
    if(l.value === k){
      l.value = l.next.value;
      l.next = l.next.next;
      if (!count){
        list = {
          ...l
        }
      }
      count++
      return removeKFromList(l,k)
    } else {
      return removeKFromList(l.next,k)
      count++
    }
  } else {
   if(l.value === k){
    l.value = null;
   }
   return list;
  }
}
