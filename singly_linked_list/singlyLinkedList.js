// modules:
import singlyNode from "./singlyNode";

/**************/
class singlyLinkedList{

    constructor()
    {
        this.head = null;

        this.tail = null;
        
        this.length = 0;
    }

    // reSize function:
    reSize(num)
    {
        this.length += num;
    }

    // unshift function: to add a new node to the begining of the singly linked list:
    unshift(num)
    {
        let newNode = new singlyNode(num); // create new singly node
        
        if(this.length === 0) // if the singly list is empty
        {
            this.head = newNode; // head pointer point to the first element.
            this.tail = newNode; // tail pointer point to the last element.
        }
        else // if the singly linked list is not empty
        {
            newNode.next = this.head; // the newNode point to the first element.

            this.head = newNode; // head pointer point ot the new first element.
        }

        this.reSize(1); // Increment the length of the SLL by +1.
    }

    // push function: to add a new sindly node to the end of the singly linked list:
    push(num)
    {
        let newNode = new singlyNode(num); // create new singly node
        
        if(this.length === 0) // if the singly list is empty
        {
            this.head = newNode; // head pointer point to the first element.
            this.tail = newNode; // tail pointer point to the last element.
        }
        else
        {
            this.tail.next = newNode; // tail pointer let its node to point to the newNode;
            this.tail = newNode; // tail pointer point now to the newNode(last node now)
        }

        this.reSize(1); // Increment the length of the SLL by +1.
    }

    // search function: to search a bout any node by its order and return the node.
    search(num)
    {
        // if the singly linked list is empty.
        if( this.length === 0 )
        {
            return -1; 
        }

        // if the num <= 1.
        if(num <= 1)
        {
            return this.head;
        }

        // if the num >= this.length.
        if(num >= this.length) 
        {
            return this.tail;
        }

        // if the num > 0  and num < this.length.
        if(num > 0 && num < this.length)
        {
            let cntr = 1;

            let temp = this.head;

            while(cntr !== num)
            {
                cntr++;

                temp = temp.next;
            }
            return temp;
        }
    }

    // insert function: to add a new element to any where.
    insert(val,num)
    {
        // state 1: when the singly linked list be empty or the num equal one or less.
        if(this.length === 0 || num <= 1)
        {
            return this.unshift(val);
        }

        // state 2: when the num be the same tall of the singly linked list. 
        if(num > this.length)
        {
            return this.push(val);
        }

        // state 3: whne you want to add an any place in your singly linked list.
        if ( num > 1 && num <= this.length) 
        {
            let newNode = new singlyNode(val); 

            let preNumTh = this.search(num-1); 
            
            let curNumTh = preNumTh.next; 

            preNumTh.next = newNode; 

            newNode.next = curNumTh; 

            this.reSize(1); 
        }
    }

    // shift function: to delete frist element in the liked list.
    shift()
    {
        if( this.length !== 0) 
        {
            let first = this.head;

            this.head = this.head.next;

            delete first.val;
            delete first.next;

            this.reSize(-1);
        }
    }

    // pop methode to remove the last node in the singly linked list.
    pop()
    {
        if(this.length !== 0) 
        {
            let lastNode = this.tail;
           
            let previousLastNodePosition = this.length - 1;
            let previousLastNode = this.search(previousLastNodePosition);
            this.tail = previousLastNode;
      
            this.tail.next = null; 

            delete lastNode.val; 
            delete lastNode.next; 

            this.reSize(-1);
        }
    }

    // delete method to romove any node from any position:
    delete(num)
    {
        if(this.length === 0)
        {
            return 'empty singly linked list';
        }

        if(num <= 0)
        {
           return this.shift();
        }

        if(num >= this.length)
        {
            return this.pop();
        }

        if(num > 1 && num < this.length)
        {
            let previousNodeOfTargetNode = this.search(num-1);
            let targetNode = this.search(num);
            let nextNodeOfTargetNode = this.search(num + 1); 

            previousNodeOfTargetNode.next = nextNodeOfTargetNode;

            delete targetNode.val;
            delete targetNode.next;

            this.reSize(-1);
        }


    }

    // print function: to print my linked list elements.
    print()
    {
        let temp = this.head;
        let linkedList = '';
        while (temp !== null)
        {
            linkedList += temp.val + ' ===> ';
            temp = temp.next;
        }

        linkedList += null;

        console.log(linkedList)
    }
}