class HashTable { 
  constructor(size) { 
    this.data = new Array(size);
  }
  hashMethod(key) { 
    let hash = 0;
    for (let i = 0; i < key.length; i++) { 
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set (key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) { 
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }
  get (key) { 
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if ( currentBucket ) { 
      for(let i = 0; i < currentBucket.length; i++ ) { 
        if(currentBucket[i][0] === key) { 
          return currentBucket[i][1]; //[0] es el key y [1]  es el value del hash table
        }
      }
    }
    return undefined; //sino encuentra nada nos regresara un  undefied.
  }
  remove (key) { 
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if ( currentBucket ) { 
      for ( let i = 0; i < currentBucket.length; i++) { 
        if ( currentBucket[i][0] === key ) { 
          const removido = currentBucket[i];
          currentBucket.splice(i, 1)//.splice(desde donde eleminar, cuantos eleminiar)
          return removido;
        }
      }
    }
    return undefined;
  }
}


const myHashTable = new HashTable(50); //aqui dice que se necesitan 50 espacios libres para el hash table

myHashTable.set('diego', 1990);
myHashTable.set('Mariana', 1998);
myHashTable.set('Alejandra', 2000);

console.log(myHashTable); //empty × 10, Array(2), empty × 29, Array(1), empty × 9

console.log(myHashTable.get('diego'));
console.log(myHashTable.get('Mariana'));
console.log(myHashTable.get('Alejandra'));

console.log(myHashTable.remove('diego'))

console.log(myHashTable);

// Reto: metodo delete para borrar un elemento, se tiene que borrar todo el elemento 
