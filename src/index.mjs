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

