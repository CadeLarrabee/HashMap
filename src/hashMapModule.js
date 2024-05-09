export class HashMap {
  constructor(tableSize, loadFactor, hashMap) {
    this.tableSize = tableSize;
    this.loadFactor = loadFactor;
    this.hashMap = hashMap ? hashMap : [];
  }
  hash(key) {
    //This has takes in a key, and for each item in its length, it returns a hashCode.
    let hashCode = 0;

    //prime numbers are good for hash maps because they help reduce collisions
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      //We're applying the modulo -within- the loop because JS has issues handling big numbers
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.tableSize;
    }

    return hashCode;
  }
  //
  set(key, value) {
    //If the value already exists at the key location, overwrite it.
    //If a key/value pair already exists there, but is not identical, we have a collision.
    const hashCode = this.hash(key);
    //this.hashMap[hashcode] = {key,value};
    //This is the basic hashcode, but it doesn't handle collisions or overwriting values.
    //first, check if there is a collision.
    //If there is, handle it by increasing the array table size, rehashing everything into the new table.
    //And assigning the new copied table over the old table.
    if (!this.hashMap[hashCode]) {
      //If nothing exists in the hashmap, push the key/value pair into it.
      this.hashMap[hashCode] = [];
      this.hashMap[hashCode].push({ key, value });
    } else if (this.hashMap[hashCode].some((pair) => pair.key === key)) {
      //Else if the key is the same, overwrite the key value pair with the new info.
      this.hashMap[hashCode] = [{ key, value }];
    } else {
      //Otherwise, we have a conflict.
      //We should upsize the array, and attempt again to re-write the info.
      this.enlargeArray();
      //Call the set code again, hopefully with a different result.
      //If not, upsize it again until we have a different hash location
      this.set(key, value);
    }
    this.calculateAndAdjustLoad();
  }
  enlargeArray() {
    //Given the new size, create a new array of that size. Take each key value pair and
    //re-assign them to the new array. Then, overwrite the old array.
    this.setTableSize(this.tableSize * 2);

    //Create a new array of the new table size.
    const newHashMap = new Array(this.tableSize).fill(null).map(() => []);
    //
    this.hashMap.forEach((bucket) => {
      bucket.forEach((pair) => {
        const { key, value } = pair;
        const newHashCode = this.hash(key); // Rehash the key for the new array size
        newHashMap[newHashCode].push({ key, value }); // Push the key-value pair into the new array
      });
    });

    this.hashMap = newHashMap;
  }

  calculateAndAdjustLoad() {
    //count all values within the array.
    //If the amount of places that have values is greater than the array length
    //we should upscale it.
    const counter = 0;
    this.hashMap.forEach((element) => {
      element ? counter++ : "";
    });

    if (counter / this.hashMap.length > this.loadFactor) {
      this.enlargeArray();
    }
  }

  //Setters
  setTableSize(newTableSize) {
    this.tableSize = newTableSize;
  }
  //Getters
  get(key) {
    //takes one argument as a key
    // and returns the value that is assigned to this key. If a key is not found, return null.
    hashcode = this.hash(key);
    if (this.hashMap[hashCode].some((pair) => pair.key === key)) {
      return this.hashMap[hashCode];
    } else {
      return null;
    }
  }
}
