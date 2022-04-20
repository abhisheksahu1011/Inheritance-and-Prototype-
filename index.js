console.log("working");


//question  1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype


let parent = {
    Name : "Abhishek",
    Place : "Akola",
    Age : 23,

    ShowDetails : function (){
        console.log(this.Name+ " " + this.Place + " "+ this.Age);
        
    }
}

parent.ShowDetails();


let child = {
    Name : "Abhi"
}

child.__proto__ = parent;
child.ShowDetails();

console.log(parent);
console.log(child);



//question2: Write code to explain prototype chaining

let parent1 = {
    Name : "Abhishek",
    Place : "Akola",
    Age : 23,

    ShowDetails : function (){
        console.log(this.Name+ " " + this.Place + " "+ this.Age);
        
    }
}

parent1.ShowDetails();


let child1 = {
    Name : "Abhi"
}

child1.__proto__ = parent1;
child1.ShowDetails();
console.log(child1);


// Question 3) Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let array =[10,20,20,25,80,45,45];
let arr = {
    getName:function(){
        let r = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(r);
    }
}
arr.getName();


//q4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Abhishek")));



