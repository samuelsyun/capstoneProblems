function duplicatesHash(arr) {

  // our hash table to store each element
  // in the array as we pass through it
  var hashTable = [];

  // store duplicates
  var dups = [];

  // check each element in the array
  for (var i = 0; i < arr.length; i++) {

    // if element does not exist in hash table
    // then insert it
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    }

    // if element does exist in hash table
    // then we know it is a duplicate
    else { dups.push(arr[i]); }

  }

  return dups;

}


module.exports = duplicatesHash
