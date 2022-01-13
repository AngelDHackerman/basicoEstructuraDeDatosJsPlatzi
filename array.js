// const array = ['diego', 'karen', 'Oscar',];

class MyArray {
  constructor() { 
    this.length = 0;
    this.data = {}
  }
  get (index) { 
    return this.data[index];
  }
  push (item) { 
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop () { 
    const lastItem = this.data[this.length - 1]; // creamos esta constante solo para saber cual fue el ultimo item eliminado
    delete this.data[this.length - 1]; // el keyword 'delete' borramos el elemento adentro del metodo
    this.length--;
    return lastItem;
  }
  myDelete (index) { 
    const item = this.data[index]; // aqui solo nos regresa el item que eliminamos.
    this.shiftIndex(index);

    return item;
  }
  shiftIndex (index) { 
    for(let i = index; i < this.length - 1; i++) { //Esta funcion empuja el index seleccionando para luego eliminar el ultimo indice con la funcion de abajo.
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray;    //creada nueva instancia


