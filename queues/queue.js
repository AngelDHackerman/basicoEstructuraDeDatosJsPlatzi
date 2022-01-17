class Node { 
  constructor(value) { 
    this.value = value;
    this.next = null;
  }
};

class Queue { 
  constructor () { 
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek () {
    return this.first;
  } 
  enqueue (value) { 
    const newNode = new Node(value);
    if (this.length === 0) { // Con esta primera validacion newNode queda como el top y el bottom (porque solo hay 1 nodo); Cuando venga un nuevo nodo el this.bottom se quedara guardado con ese primer nodo que le pasamos;
      this.first = newNode; 
      this.last = newNode;
    } else { 
      this.last.next = newNode; //Este nos ayuda cuando queramos eleminar el primer nodo.
      this.last = newNode;
    }
    this.length++;

    return this; //Con esto nos regresa el stack completo.
  }
  dequeue () { 
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next // Asi se elimina el primer nodo del queue.
    }
    this.length--;

    return this;
  }
}

let myQueue = new Queue;

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue)