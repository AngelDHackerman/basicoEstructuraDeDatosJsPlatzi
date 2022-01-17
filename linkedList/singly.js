// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = { 
//   head: { 
//     value: 1, 
//     next: { 
//       value: 2, 
//       next: { 
//         value: 3, 
//         next: { 
//           value: 4,
//           next: { 
//             value: 5,
//             next:null,
//           }
//         }
//       }
//     }
//   }
// }


class Node { 
  constructor(value) { 
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList { 
  constructor(value) { 
    this.head = { 
      value: value,
      next: null,
    }
    this.tail = this.head;

    this.lenght = 1;
  }
  append (value) { 
    const newNode = new Node(value);

    this.tail.next = newNode;// Esto agrega el nodo, pero no lo convierte en la nueva cola.
    this.tail = newNode; // Con esto ya lo posicionamos en la cola del linked list.
    this.lenght++; //Aqui incrementamos la longitud del list. 

    return this;
  }
  prepend(value) { 
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;

    return this;
  }
  insert (index, value) {
    if(index >= this.lenght) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;//Este de aqui fue creado para que el garbage collector no lo elimine porque se va a quedar in un pointer
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.lenght++;

    return this;
  } 
  getTheIndex (index) { 
    let counter = 0; 
    let currentNode = this.head;

    while( counter !== index ) { 
      currentNode = currentNode.next;
      counter++;

    }

    return currentNode;
  }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);


// append(value){
//   let newNode = new Node(value)

//   let lastNode = this.head;
  
//   for(let i = 1; i  < this.length; i++){
//       lastNode = lastNode.next;
//   }

//   lastNode.next = newNode;

//   this.length++;
//   this.tail = newNode;
// }



// Reto: generar el metodo de append para agregar Nodos a nuestra lista,
// cada nodo nuevo se va a convertir en la nueva cola, 