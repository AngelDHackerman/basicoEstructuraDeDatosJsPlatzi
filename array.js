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
    for(let i = index; i < this.length - 1; i++) { 
      console.log(i)
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];

    this.length--;
  }
}



const myArray = new MyArray;    //creada nueva instancia

myArray.push('hola')
myArray.push('hola1') // este sera eliminado
myArray.push('hola2')
myArray.push('hola3')
myArray.push('hola4')
myArray.push('hola5')

myArray.myDelete(1);
console.log(myArray)

/* 
  {1: ariel, 2: ellie, 3: nina, 4: celular} borraremos Ellie

  1.Estamos en el loop: for(let i = index; i < this.length -1; i++) 
  este empieza con el i = index, es decir, el bucle empieza con “ellie”, 
  y terminara cuando nos quedemos sin array.

  2.this.data[i] = this.data[i + 1]; Aca empieza el show, 
  entonces la idea es eliminar a ellie, entonces ahora, ellie = this.data[i] 
  pero yo la quiero eliminar, entonces la sobreescribiremos con this.data[i + 1] = (’nina’) 
  ahora el array es [ariel,nina,nina,celular],

  3. ahora nina = this.data[2] ⇒ se sobreescriibira con celular, 
  y entonces quedara ⇒ [’ariel’,’’nina’,’celular’,’celular’]

  4. Ahora ya no seguimos porque no hay mas array, entonces que sucede?

  5. delete this.data[this.length -1] borramos la ultima posicion del array, es decir celular, ahora el array queda asi:[’ariel’,’’nina’,’celular’,undefined]

  6. queda eliminar la longitud del array para que no sea vea el undefined ⇒ this.length–;

*/