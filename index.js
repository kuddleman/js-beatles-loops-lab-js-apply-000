// add solution here

function theBeatlesPlay(arrayMus, arrayInst) {
  var newArr = [];
  for (let i = 0; i < arrayMus.length; i++) {
    newArr.push(`${arrayMus[i]} plays ${arrayInst[i]}`);
  }
  return newArr;
}
