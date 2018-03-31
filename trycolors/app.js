
const map1 = new Map();

const key1 = 'some string',
      key2 = {},
      key3 = function(){};

map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// console.log(map1.size);

for(let [key, value] of map1) {
  // console.log(`${key} = ${value}`);
}

    // ES6

const set1 = new Set();

set1.add(100);
set1.add('Add string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

console.log(set1.size);
