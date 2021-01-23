(function printTriangle(){

var s, t, size = 10, tree = '', space = '';

for (s = 0; s < (size/2) - 1; s++){
  space += ' ';
}

for(t = 0; t < size/2; t++){
  tree += '* ';

  console.log(space + tree);

  space = space.substr(0, space.length -1);
}
})()