//Create Node Class//

class listNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Create List Class//

class linkedList{
    constructor(head = null){
        this.head = head;
    }
    //Create size() Method//

    size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
    }

    //Create clear() Method//

    clear(){
        this.head = null;
    }
    
    //Create getLast() Method//

    getLast(){
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
        }
            return lastNode.data;
        }

    //Create getFirst() Method//

    getFirst(){
        let firstNode = this.head;
        if(firstNode) {
            firstNode = firstNode.data
        }
        return firstNode
    }

    //Create append() Method//

    append(value){
        let newNode = new listNode(value);
        let firstNode = this.head;
        newNode.next = null
        if(firstNode){
            while(firstNode.next != null)
            firstNode = firstNode.next;
        }
        firstNode.next = newNode;
        return this.head;
    }

    //Create prepend() Method//

    prepend(value){
        let newNode = new listNode(value);
        let head = this.head;
        newNode.next = head
        head = newNode
        return head;
    }

    //Create atIndex() Method//

    atIndex(value){
        let firstNode = this.head;
        if(firstNode){
            for( let i = 0 ; i < value; i++)
            firstNode = firstNode.next;
        }
        return firstNode.data
    }

    //Create pop() Method//

    pop(){
        let firstNode = this.head;
        if(firstNode){
            while(firstNode.next != null){
                firstNode = firstNode.next;
            }
        firstNode = null;
        return firstNode;
        }
    }
}




//Testing Area//
let nodeOne = new listNode(1);
let nodeTwo = new listNode(2);
nodeOne.next = nodeTwo;
let nodeList = new linkedList(nodeOne);
console.log(nodeList.pop())


