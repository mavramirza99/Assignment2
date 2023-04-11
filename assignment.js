//Assignment no 1:

// function createAdder(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//   const addFive = createAdder(5);
// console.log(addFive(3)); 
// console.log(addFive(5));  

//Assignment no 2:

// function searchArray(array, value) {
//     // base case: if the array is empty, return false
//     if (array.length === 0) {
//       return false;
//     }
//     if (array[0] === value) {
//       return true;
//     } else {
//       return searchArray(array.slice(1), value);
//     }
//   }

//   const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3)); 
// console.log(searchArray(arr, 6)); 

//Assignment no 3:

// function addNewParagraph(text) {
//     const newParagraph = document.createElement('p');
    
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
//   }
//   document.write("<h2>Hello World!</h2><p>Have a nice day!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor libero ullam vel amet cupiditate quo quaerat ea accusamus ab.</p>");

//Assignment no 4:

// function addListItemToList(listId, itemText) {
//     const list = document.getElementById(listId);
    
//     if (list) {
//       const listItem = document.createElement('li');
//       listItem.textContent = itemText;
      
//       list.appendChild(listItem);
//     } else {
//       console.error(`No list found with id ${listId}`);
//     }
//   }

//Assignment no 5;

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }

//Assignment no 6;

// function saveObjectToLocalStorage(key, object) {
//     const objectString = JSON.stringify(object);
    
//     localStorage.setItem(key, objectString);
//   }
//   const myObject = { name: 'John', age: 30 };

// saveObjectToLocalStorage('myObject', myObject);

// console.log(myObject);

//Assignment no 7;

// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key);
    
//     const object = JSON.parse(objectString);
//     return object;
//   }
//   const myObject = getObjectFromLocalStorage('myObject');
// console.log(myObject);

//Assignment no 8;

// function saveObjectPropertiesToLocalStorage(object) {
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         localStorage.setItem(key, object[key]);
//       }
//     }
    
//     const retrievedObject = {};

//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = localStorage.getItem(key);
//       retrievedObject[key] = value;
//     }
//     return retrievedObject;
//   }
//   const myObject = { name: 'John', age: 30 };

// const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
// console.log(retrievedObject);