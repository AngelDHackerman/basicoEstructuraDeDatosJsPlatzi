// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = { 
  head: { 
    value: 1, 
    next: { 
      value: 2, 
      next: { 
        value: 3, 
        next: { 
          value: 4,
          next: { 
            value: 5,
            next:null,
          }
        }
      }
    }
  }
}


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