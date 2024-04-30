//Create Node Class//

class listNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let node5 = new listNode(5);
let node2 = new listNode(2);
node5.next = node2;

//Create List Class//

class linkedList{
    constructor(head = null){
        this.head = head;
    }
}

let node5List = new linkedList(node5);


//Testing Area//
console.log(node5List)
console.log(node5)