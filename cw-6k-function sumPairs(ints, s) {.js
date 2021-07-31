function sumPairs(ints, s) {
  if (ints.length < 2) return undefined;
  
  let set = new Set();
  set.add(ints[0])
  for(i = 1; i<=ints.length; i++) {
    let requiredNumber = s - ints[i];
    if(set.has(requiredNumber)) {
      return [requiredNumber, ints[i]];
    }
    set.add(ints[i]);
  }

  return undefined;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))
