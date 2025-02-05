function Node(data, next){
    this.data = data;
    this.next = next;
    }

function LinkedList(){
this.linkedList = {};
}

// Append function - adds a node to the end of linkedList

LinkedList.prototype.append = function append(value){
    let newNode = new Node(value,null);
    if(Object.keys(this.linkedList).length === 0)
    {
        this.linkedList = newNode;
    }
    else{
            if(this.linkedList["next"] === null)
                this.linkedList["next"] = newNode;

            else 
            {
              appendAtEndOfLinkedList(this.linkedList, newNode);
            }
        
    }
}


function appendAtEndOfLinkedList(linkedListTemp, newNode){
    if(linkedListTemp["next"] != null)
    {
        appendAtEndOfLinkedList(linkedListTemp["next"], newNode);
    }
    
    else 
    {
        linkedListTemp["next"] = newNode;
    }
}

// Prepend function - adds a node to the beginning of linkedList

LinkedList.prototype.prepend = function prepend(value){
    let newLinkedList = new LinkedList();
    newLinkedList.append(value);
    newLinkedList.linkedList["next"] = this.linkedList;
    this.linkedList = newLinkedList.linkedList;
}

// Size function - return the size of the linkedList

LinkedList.prototype.size = function size(){
    let counter = 0;
    return sizeOfThisLinkedList(this.linkedList, counter);
}

function sizeOfThisLinkedList(linkedListTemp, counter){
    if(linkedListTemp === null) return counter;
    if(linkedListTemp["next"] === null) return ++counter;
    else{
        counter++;
       return sizeOfThisLinkedList(linkedListTemp["next"], counter);
    }
}

// Head function - return the head node of the linkedList

LinkedList.prototype.head = function head(){
    let newNodeHead = new Node();
    newNodeHead.data = this.linkedList.data;
    newNodeHead.next = null;
    return newNodeHead;
}

// Tail function - return the Tail node of the linkedList

LinkedList.prototype.tail = function tail(){
    let newNodeTail = new Node();
    findTailNode(this.linkedList, newNodeTail);
    return newNodeTail;
}

function findTailNode(linkedListTemp, nodeTail){
    if(linkedListTemp === null) return nodeTail;
    if(linkedListTemp["next"] === null)
        {
            nodeTail.data = linkedListTemp["data"];
            nodeTail.next = linkedListTemp["next"];
            return nodeTail;
        }
    else{
    
       return findTailNode(linkedListTemp["next"], nodeTail);
    }
}

// AtIndex function - return the node value of the linkedList at the index

LinkedList.prototype.atIndex = function atIndex(indexValue){
    let indexCounter = 0;
    let indexValueData = atIndexOfThisLinkedList(this.linkedList, indexCounter, indexValue);
    if(indexValueData)
        return indexValueData;
    else return "Index not correct";
}

function atIndexOfThisLinkedList(linkedListTemp, indexCounter, indexValue){
    if(linkedListTemp === null) return false;
    if(indexCounter === indexValue) return linkedListTemp["data"];
    else{
        indexCounter++;
       return atIndexOfThisLinkedList(linkedListTemp["next"], indexCounter, indexValue);
    }
}

// pop function - deletes the last node of the linkedList

LinkedList.prototype.pop = function pop(){
    let isEndOfLinkedList = {status: false};
   popEndOfThisLinkedList(this.linkedList, isEndOfLinkedList);
}

function popEndOfThisLinkedList(linkedListTemp, isEndOfLinkedList){
    if(linkedListTemp === null) return;
    if(linkedListTemp["next"] === null) 
        { isEndOfLinkedList.status = true;
            return;
        }
    else{
        popEndOfThisLinkedList(linkedListTemp["next"],isEndOfLinkedList);
        if(isEndOfLinkedList.status === true)
        {
            linkedListTemp["next"] = null;
            isEndOfLinkedList.status = false;   
        }
        return;
    }
}

// contains function - checks if the node is present in the linkedList

LinkedList.prototype.contains = function contains(searchValue){
    return containsInThisLinkedList(this.linkedList, searchValue);
}

function containsInThisLinkedList(linkedListTemp, searchValue){
    if(linkedListTemp === null) return false;
    if(linkedListTemp["data"] === searchValue) return true;
    else return containsInThisLinkedList(linkedListTemp["next"], searchValue);
}

// find function - checks if the node is present in the linkedList & returns the index

LinkedList.prototype.find = function find(searchValue){
    let indexCounter = 0;
    return findInThisLinkedList(this.linkedList, indexCounter, searchValue);
}

function findInThisLinkedList(linkedListTemp, indexCounter, searchValue){
    if(linkedListTemp === null) return "Not in the LinkedList";
    if(linkedListTemp["data"] === searchValue) return indexCounter;
    else{
        indexCounter++;
       return findInThisLinkedList(linkedListTemp["next"], indexCounter, searchValue);
    }
}

// toString function - converts the all the data points to string

LinkedList.prototype.toString = function toString(){
    if(Object.keys(this.linkedList).length === 0) return "Empty String";
    let toStringReturn = "";
    return toStringThisLinkedList(this.linkedList, toStringReturn);
}

function toStringThisLinkedList(linkedListTemp, toStringReturn){
    if(linkedListTemp === null) return toStringReturn + " null" ;
    else{
        toStringReturn += "( " + linkedListTemp["data"] +" )" + " -> ";
       return toStringThisLinkedList(linkedListTemp["next"], toStringReturn);
    }
}

// insertAt function - inserts the given value at given index

LinkedList.prototype.insertAt = function insertAt(indexValue, insertIndex){
    let indexCounter = 0;
    if(insertIndex<0) return "Index not correct";
    if(insertIndex > this.size()) return "Index out of bound";
    if(insertIndex === 0)
    {
        this.prepend(indexValue);
        return true;
    }
    else
    return insertAtThisLinkedList(this.linkedList, indexCounter, indexValue, insertIndex);

}

function insertAtThisLinkedList(linkedListTemp, indexCounter, indexValue, insertIndex){
    if(linkedListTemp === null) return false;
    if(indexCounter === insertIndex-1)
    {
        let newNode = new Node(indexValue, null);
        let tempNode = linkedListTemp["next"];
        newNode.next = tempNode;
        linkedListTemp["next"] = newNode;
        return true;
    }
    else{
        indexCounter++;
       return insertAtThisLinkedList(linkedListTemp["next"], indexCounter, indexValue, insertIndex);
    }
}

// removeAt function - removes the node at given index

LinkedList.prototype.removeAt = function removeAt(insertIndex){
    let indexCounter = 0;
    if(insertIndex<0) return "Index not correct";
    if(insertIndex > this.size()) return "Index out of bound";
    if(insertIndex === 0)
        {
            this.linkedList =  this.linkedList["next"];
            return true;
        }
    else
    return removeAtThisLinkedList(this.linkedList, indexCounter, insertIndex);

}

function removeAtThisLinkedList(linkedListTemp, indexCounter, insertIndex){
    if(linkedListTemp === null) return false;
    if(indexCounter === insertIndex-1)
    {
        linkedListTemp["next"] =  linkedListTemp["next"]["next"];
        return true;
    }
    else{
        indexCounter++;
       return removeAtThisLinkedList(linkedListTemp["next"], indexCounter, insertIndex);
    }
}


let linkedlistClass = new LinkedList();
linkedlistClass.append("1");
linkedlistClass.append("2");
linkedlistClass.append("3");
linkedlistClass.append("4");
linkedlistClass.prepend("5");
console.log(linkedlistClass);
console.log(linkedlistClass.size());
console.log(linkedlistClass.head());
console.log(linkedlistClass.tail());
console.log(linkedlistClass.atIndex(2));
linkedlistClass.pop();
console.log(linkedlistClass);
console.log(linkedlistClass.contains("2"));
console.log(linkedlistClass.find("5"));
console.log(linkedlistClass.toString());
console.log(linkedlistClass.insertAt("Amay",4));
console.log(linkedlistClass);
console.log(linkedlistClass.find("Amay"));
console.log(linkedlistClass.removeAt(0));
console.log(linkedlistClass);