const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  rootNode = null;  // корень

  root() {
    return this.rootNode;
  }
  
  add(data) {
    let newNode = new Node(data);

    if(this.rootNode === null){
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode)
    }
  }

  insertNode(node, newNode) {
      if (newNode.data < node.data){
        if (node.left === null){
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null){
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
  }

  find (data) {
    if (this.rootNode === null){
      return null;
    } else {
      return this.getNode(this.rootNode, data);
    }
  }

  has(data) {
    return !!this.find(data);
  }

   

  getNode (node, data) {
    if (node === null){
      return null;
    } 
    if (node.data === data){
      return node;
    } 
    if (node.data > data){
      return this.getNode(node.left, data);
    } else {
      return this.getNode(node.right, data);
    }
  }

  remove(data) {
    let nodeRemove = this.getNode(this.rootNode, data);
    let left = nodeRemove.left;
    let right = nodeRemove.right;
    let newNode = left ? this.max(left).data : right ? this.min(right).data : data;
    let [nodeParentRemove, isLeft] = this.getParentNode(newNode);

    nodeRemove.data = newNode;
    this.removeLastNode(nodeParentRemove, isLeft);
  }

  getParentNode ( data, node = this.rootNode){
    if(node === null){
      return null;
    }
    if (node.left && node.left.data === data){
      return [node, true]
    } 
    if(node.right && node.right.data === data){
      return [node, false]
    } 
    if (node.data > data){
      return this.getParentNode( data, node.left);
    } else {
      return this.getParentNode(data, node.right);
    }
  }

  removeLastNode(node, isLeft){
    if (isLeft){
      node.left = null;
    } else {
      node.right = null;
    }
  }

  min(node = this.rootNode) {
    let nextNode = node.left;
    while(nextNode) {
      node = nextNode;
      nextNode = nextNode.left;
    }
    return node;
  }

  max(node = this.rootNode) {
    let nextNode = node.right;
    while(nextNode){
      node = nextNode;
      nextNode = node.right
    }
    return node;
  }

}
