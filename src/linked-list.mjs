import { Node } from "./node.mjs";

function LinkedList(){
    let head = null;
   
     //adds to the end of the list
    const append = (value) => {
        let currNode = Node();
        currNode.setValue(value);

        let newHead = getHeadNode();
        if(newHead === null){
            setHeadNode(currNode);
        } else {
            while(newHead.getNextNode()){
                newHead = newHead.getNextNode();
            }
            newHead.setNextNode(currNode);
        }
    }

    //adds to the beginning of the list
    const prepend = (value) => {
        let currNode  = Node();
        currNode.setValue(value);
    
        currNode.setNextNode(getHeadNode());
        setHeadNode(currNode);        
    }

    //returns the size of the list
    const size = () => {
        let currNode  = getHeadNode();
        let nodeCount = 0;

        while(currNode){
            nodeCount++;
            currNode = currNode.getNextNode();
        }
        return nodeCount;
    }

    //set the head to point to a node
    const setHeadNode = (node) => head = node;
    //get the node that head points to
    const getHeadNode = () =>  head;

    //get the value of last node in the list
    const getTailNode = () => {
        let tail = getHeadNode();

        while(tail.getNextNode()){
            tail = tail.getNextNode();
        }
        return tail.getValue();
    }

    //returns node at a given index
    const at = (index) => {
        let currNode = getHeadNode();
        let count = 0;

        while(currNode){
            if(count++ === index){
                return currNode.getValue();
            }
            currNode = currNode.getNextNode();
        } 
        return null;
    }

    const pop = () => {
        let currNode = getHeadNode();
        let prevNode = null;

        if(currNode.getNextNode() === null){
            setHeadNode(null);
            return;

        }

        while(currNode.getNextNode()){
            prevNode = currNode;
            currNode = currNode.getNextNode();
        }
        prevNode.setNextNode(null);         
    }

    const contains = (value) => {
        let currNode = getHeadNode();

        while(currNode){
            if(currNode.getValue() === value){
                return true;
            }
            currNode = currNode.getNextNode();
        }
        return false;
    }

    const find = (value) => {
        let index    = 0;
        let currNode = getHeadNode();

        while(currNode){
            if(currNode.getValue() === value){
                return index;
            }
            currNode = currNode.getNextNode();
            index++;
        }
        return null;
    }

    const toString = () => {
        let currNode = getHeadNode();
        let nodeToString = '';

        while(currNode){
            nodeToString += `(${currNode.getValue()}) -> `;
            currNode = currNode.getNextNode();
        }
        nodeToString += `${currNode}`;  
        
        return nodeToString;
    }

    const insertAt = (value, index) => {
        let listSize = size();
        
        if(listSize < index){
            console.log("INDEX NOT FOUND");
            return;
        }
        
        let currNode   = getHeadNode();

        let newNode    = Node();
        newNode.setValue(value);

        let dummyNode = Node();
        dummyNode.setNextNode(currNode);

        let prevNode = dummyNode;
        let indexCount = -1;
     
        while(indexCount !== index-1){
            currNode = currNode.getNextNode();
            prevNode = prevNode.getNextNode();
            indexCount++;
        }
        newNode.setNextNode(currNode);
        prevNode.setNextNode(newNode);
        setHeadNode(dummyNode.getNextNode());
    }

    /*const removeAt = (index) => {
        let currNode = getHeadNode();
        let indexCount = 0;
        let prev = null;
        while(currNode){
            if(index === value){
                prev.next = currNode.next;
            }
        } 
    }*/

    return { append, prepend, size, getHeadNode, getTailNode, at,
        pop, contains, find, toString, insertAt,
    }
}

export { LinkedList };