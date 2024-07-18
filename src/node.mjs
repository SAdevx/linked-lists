function Node(){
    let value    = null;
    let nextNode = null;

    let getValue    = () => value;
    let getNextNode = () => nextNode;
    
    let setValue    = (val) => value    = val;
    let setNextNode = (val) => nextNode = val;

    return {getValue, getNextNode, setValue, setNextNode}
}

export { Node };