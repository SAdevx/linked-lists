import {LinkedList} from './linked-list.mjs';

const list = LinkedList();

//append to the end of the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

//append to the beginning of the list
list.prepend("monkey");
list.prepend("tiger");

//returns the list as a string
console.log(list.toString())

//get size of the list
console.log(list.size());

console.log(list.getTailNode());

//returns value at node index
console.log(list.at(0));  
console.log(list.at(2));  
console.log(list.at(5));  
console.log(list.at(8));  

//remove last node
list.pop();
console.log(list.toString())

console.log(list.contains("dog"));
console.log(list.contains("snake"));
console.log(list.contains("squirrel"));

console.log(list.find("turtle"));
console.log(list.find("cat"));

console.log(list.toString());

//insert at location i, if only it exists in the list
list.insertAt('sheep', 0);
list.insertAt('Hippopotamus', 1);
list.insertAt('Ox', 3);

console.log(list.toString());

//removes at location i, if only it exists in the list
list.removeAt(2);
list.removeAt(0);
console.log(list.toString());
list.removeAt(8);
list.removeAt(0);

console.log(list.toString());
