(function printTriangle(){

var s, i, size = 10, tree = '', space = '';

for (s = 0; s < (size/2) - 1; s++){
  space += ' ';
}

for(i = 0; i< size/2; i++){
  tree += '* ';

  console.log(space + tree);

  space = space.substr(0, space.length -1);
}
})()