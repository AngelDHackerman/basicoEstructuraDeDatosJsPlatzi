
class Node { 
  constructor(value) { 
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList { 
  constructor(value) { 
    this.head = { 
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;

    this.lenght = 1;
  }
  append (value) { 
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;// Esto agrega el nodo, pero no lo convierte en la nueva cola.
    this.tail = newNode; // Con esto ya lo posicionamos en la cola del linked list.
    this.lenght++; //Aqui incrementamos la longitud del list. 

    return this;
  }
  prepend (value) { 
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;

    return this;
  }
  insert (index, value ) { 
    if (index >= this.lenght) { 
      return this.append(value);
    } else if (index === 0 ) { 
      return this.prepend(value);
    }

    let newNode = new Node (value);
    let prevPointer = this.getTheIndex (index - 1);
    let nextPointer = prevPointer.next;

    newNode.prev = prevPointer;
    newNode.next = nextPointer;
    prevPointer.next = newNode;
    nextPointer.prev = newNode;

    this.lenght++;

    return this;
  }
  getTheIndex (index) { 
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) { 
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);