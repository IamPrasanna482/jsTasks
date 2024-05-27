
const nestedObject = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
};


function flattensNestedObject(nestedObj){

  // if the type of the nestedObj is a object itself, make recursive call to the function iterate through the keys of the object,

  var result = {};

  for(let key in nestedObj){

    if(typeof(nestedObj[key]) === 'object'){
      // console.log("in the nested part");

      var newObj = flattensNestedObject(nestedObj[key]);
      for (let key2 in newObj) {
        result[key + '.' + key2] = newObj[key2];
    }
      // make recursive call to the nested part
    }
    else{
      result[key] = nestedObj[key];
    }


  }
  return result;
}

 console.log(flattensNestedObject(nestedObject));

// for(const it in nestedObject){
//   console.log(typeof(nestedObject[it]));
//   console.log(it);
// }


/*
output - 
{
  keyOne: 'value One',
  keyTwo: 'value Two',
  keyThree: 'value Three',
  'keyFour.keyA': true,
  'keyFour.keyB': false,
  'keyFour.keyC.keyCOne': 'key C one value',
  'keyFour.keyC.keyCTwo': 'key C two value',
  'keyFour.keyC.keyCThree': 1234
}

*/
