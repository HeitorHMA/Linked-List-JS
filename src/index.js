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
    


}




//Testing Area//
let nodeOne = new listNode(1);
let nodeTwo = new listNode(2);
nodeOne.next = nodeTwo;
let nodeList = new linkedList(nodeOne);
console.log(nodeList.clear())

