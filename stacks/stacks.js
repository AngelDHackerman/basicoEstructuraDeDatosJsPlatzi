class Node { 
  constructor(value) { 
    this.value = value;
    this.next = null;
  }
}


class Stack { 
  constructor () { 
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek () {
    return this.top;
  } 
  push (value) { 
    const newNode = new Node(value);
    if (this.length === 0) { // Con esta primera validacion newNode queda como el top y el bottom (porque solo hay 1 nodo); Cuando venga un nuevo nodo el this.bottom se quedara guardado con ese primer nodo que le pasamos;
      this.top = newNode;
      this.bottom = newNode; 
    } else { 
      const holdingPointer = this.top; //Esto es para evitar que el actual top se quede sin pointer y sea eliminado por el garbage collector de JS.
      this.top = newNode;
      this.top.next = holdingPointer;//Aqui creamos el pointer para el valor que antes estaba como top.
    }
    this.length++;

    return this; //Con esto nos regresa el stack completo.
  }
  pop () { 
    delete this.top.value;
    this.length--;
  }
}

let myStack = new Stack;

myStack.push(1);
myStack.push(3);
myStack.push(5);
myStack.push(7);

console.log(myStack)

