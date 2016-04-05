function smushedArray(testArray) {
  var flattened = new Array();
  var savedArray = testArray;

  for (var i = 0; i < savedArray.length; i++) {
    var arrayIndex = savedArray[i];
    if (Array.isArray(arrayIndex)) {
      doTheArray(arrayIndex, flattened);
    }
    else {
      flattened.push(arrayIndex);
    }
  }
  return flattened;
};

function doTheArray(multiArray, flattened) {
  for (var i = 0; i < multiArray.length; i ++) {
    if (Array.isArray(multiArray[i])) {
      doTheArray(multiArray[i], flattened);
    }
    else {
      flattened.push(multiArray[i]);
    }
  }
  return flattened;
};