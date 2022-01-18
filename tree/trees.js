class Node { 
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree { 
  constructor() { 
    this.root = null;
  }
  insert (value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else { 
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) { //validacion por si el valor es menor(lado izquierdo)
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }   
          currentNode = currentNode.left;

        } else {            //(value > currentNode.value)validacion por si el valor es mayor (lado derecho)
          if (!currentNode.right) {
            currentNode.right = newNode;

            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

let myBinarySearchTree = new BinarySearchTree;

myBinarySearchTree.insert(10);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(8);
myBinarySearchTree.insert(17);
myBinarySearchTree.insert(170);

myBinarySearchTree.insert(1); // left del nodo del numero 2
myBinarySearchTree.insert(45);// right del nodo del numero 170

myBinarySearchTree.insert(9);




console.log(myBinarySearchTree)

