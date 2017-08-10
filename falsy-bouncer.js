function bouncer(potentiallyFalsyArray) {
  return potentiallyFalsyArray.filter(function(potentialFalsy){
    return potentialFalsy;
    // false, null, 0, "", undefined, and NaN.
  });
  
}

bouncer([7, "ate", "", false, 9]);
