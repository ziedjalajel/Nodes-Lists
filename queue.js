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
          this.front
          this.back
          this.waitingTime = 0
      }
      peek = ()=> {
        if(this.isEmpty()) console.log("Empty row")
        else return this.front.data;}
      isEmpty=()=>this.size ===0
      isFull=()=>this.size===this.limit
      addNode=(groupSize)=>{
        let node = new Node(groupSize)
        if(this.isEmpty())
        this.front = node
        else this.back.next = node
        this.back=node
        this.size+=1
        this.waitingTime+=groupSize*0.5
      };
    
    enqueue=(groupSize)=>{
      if(this.isFull())
      console.log("wait till next round");
      else{ let numberOfPeople= groupSize
        while(numberOfPeople>12){
          this.addNode(12)
          numberOfPeople-=12
        }
        this.addNode(numberOfPeople)
      
        }
    }
    
    dequeue=()=>{
      if(this.isEmpty())
      console.log("no waiting time")
      else if(this.size===1){
        let removedNode=this.back
        this.back=null
        this.front = null
        this.waitingTime=0
        this.size=0
      }
      else {
        let removedNode = this.front
        this.front = removedNode.next
        this.size--
        this.waitingTime-=removedNode.groupSize*0.5
        return removedNode.groupSize
      }
    }
  } 
  const ride = new Queue()
  console.log(ride.waitingTime)
  ride.enqueue(6)
  ride.enqueue(8)
  ride.enqueue(20)
  console.log(ride.waitingTime)
  ride.dequeue()
  console.log(ride.waitingTime)
