const prompt = require('prompt-sync')({sigint: true})

class Node {
    constructor(age,highlight,nextNode=null){
        this.age=age
        this.highlight=highlight
        this.nextNode=nextNode
    }
}
const node7 = new Node(7,"I turned seven")
const node3 = new Node(3,"I started walking",node7)
const node1 = new Node(1,"I was born",node3)

class linkedList {
    constructor(age,highlight){
        this.head=new Node(age,highlight)
    }
insertbeginning=(age,highlight)=>{
    const node=new Node(age,highlight,this.head)
    this.head=node
}
getlinklist = ()=>{
    let current=this.head
    while(current){
        console.log(`year :${current.age},highlight :${current.highlight}`)
        current=current.nextNode
    }
}
insertHighlight=(age)=>{
    let current=this.head
    while(current.age<age){
        let currentAge=current.age+1
        if(current.nextNode&&current.nextNode.age===currentAge){
            current=current.nextNode
        }else{
            let highlight=prompt(`enter highlight for year: ${currentAge} `)
            let newNode = new Node(currentAge,highlight,current.nextNode)
            current.nextNode=newNode
            current=newNode
        }
    }
}
}
const ageList=new linkedList(7,"i was seven")

ageList.insertbeginning(3,"i started walking")
ageList.insertbeginning(1,"i was born")
let age=prompt("age:")
ageList.insertHighlight(age)
ageList.getlinklist()

  