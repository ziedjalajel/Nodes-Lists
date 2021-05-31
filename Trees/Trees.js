const prompt = require("prompt-sync")({sigint: true})

class Node{
    constructor(name){
        this.name = name
        this.children = []
    }
    traverse=()=>{
        let nodes = [this]
        while(nodes.length>0){
            let current = nodes.pop()
            console.log(current.name)
            nodes = [...nodes,...current.children]
        }
        }
    parents=(child)=>{
        let nodes=[this]
        while(nodes.length>0){
            let current=nodes.pop()
            if(child.name.split(" ")[1]===current.name.split(" ")[0]){
                return current
            }
            nodes = [...nodes,...current.children]
        }
        return "parent does'nt exist "
    }

    addchild=(child)=>{
        if(this.children.length<2){
            this.children.push(child)
            console.log(`child ${child.name} has been added`)
        }
        else console.log(`you can only havel 2`)
    }

}
let childname = prompt("enter child full name : ")
const root = new Node("asgardian")
while(childname!=="done"){
    let child = new Node(childname)
    let parent = root.parents(child)
    if(parent!=="parent does'nt exist "){
        parent.addchild(child)
    }
    else console.log(parent)
    childname=prompt("enter child full name : ")
}
root.traverse()