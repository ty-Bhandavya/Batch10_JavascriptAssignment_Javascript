var fruits = ["grapes" ,"orange" ,"kivi" , "Mango","Apple"];
 console.log(fruits);
 console.log(typeof fruits);

var isArray = Array.isArray(fruits)
console.log(isArray);

fruits.push("Apples") //add new element in a array at end
console.log(fruits);

console.log(fruits.pop());//delete end element in array

//add new element in array .how many data we will using unshift method all the data will be added before starting the array
console.log(fruits.unshift("lime","lemon","cherry","blueberry","banana"));
console.log(fruits);
//console.log(fruits.shift());// delect first element in array

// an array includes a certain element, returning true or false 
console.log(fruits.includes("lime" , 0));

/*start — The zero-based location in the array from which to start removing elements.
deleteCount — The number of elements to remove.
 items — Elements to insert into the array in place of the deleted elements.*/
//console.log(fruits.splice(1,1,"watermelon"));
console.log("------------");

console.log(fruits.slice(1,4));

console.log(fruits.slice(-4,-1));