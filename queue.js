class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue{
      constructor(limit=10, front=null, back=null){
          this.limit =limit
          this.size=0
          let persons
          let time = persons*.5
      }
      peek = ()=> {
        if(this.isEmpty()) console.log("Empty row")
        else return this.front.data;
      isEmpty=()=>this.size ===0
      isFull=()=>this.size===this.limit
    enqueue = (groupSize)=>{
      if(this.isFull())console.log("wait till next round");
      else const newNode = new node(groupSize);
      if(isEmpty()){
        this.front = newNode
        this.back = newNode
      }
    } 
    }
  }
  const gameQueue = new queue(12)
  gameQueue.enqueue()
