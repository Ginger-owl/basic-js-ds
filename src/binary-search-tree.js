const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    let newNode = new Node(data);
    if(this.treeRoot === null){
        this.treeRoot = newNode;
        return this;
    }
    let current = this.treeRoot;
    while(current){
      if(data === current.data) return undefined;
      if(data < current.data){
        if(current.left === null){
            current.left = newNode;
            return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
            current.right = newNode;
            return this;
        } 
        current = current.right;
      }
    }
  }

  has(data) {
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    const hope = true;
    while (hope) {
      if (!current) {
        return false;
      }
      if (data === current.data) {
        return true;
      } 
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    if(!this.treeRoot) {
      return null
    }
    
    let current = this.treeRoot
    let found = null
    while (current && !found) {
      if (data < current.data) {
        current = current.left
        } else if (data > current.data) {
          current = current.right
        } else {
          found = current
        } 
      }
  
      if (!found) {
        return null;
      }
      return found
  }

  remove(data) {
    const recursiveDelete = (current, data) => {
      if (current == null) {
        return null
      }
      if (data < current.data) {
        current.left = recursiveDelete(current.left, data)
      }
      else if (data > current.data) {
        current.right = recursiveDelete(current.right, data)
      }
      else {
        if (current.left === null) {
          return current.right
        } else if (current.right === null) {
          return current.left
        }

        let inorderSuccessor = current.right
        while (inorderSuccessor.left !== null) {
          inorderSuccessor = inorderSuccessor.left
        }
        current.data = inorderSuccessor.data

        current.right = recursiveDelete(current.right, inorderSuccessor.data)
      }
      return current
    }
    
    this.treeRoot = recursiveDelete(this.treeRoot, data)
  }

  min() {
    if(!this.treeRoot) {
      return null
    }
    
    let current = this.treeRoot
    while (current && current.left != null) {
      current = current.left
    }
    return current.data
  }

  max() {
    if(!this.treeRoot) {
      return null
    }
    
    let current = this.treeRoot
    while (current && current.right != null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};