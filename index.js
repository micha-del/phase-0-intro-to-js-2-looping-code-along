function writeCards(names, event) { 
   const newArray = [] 
   for (let i = 0; i < names.length; i++) {
   newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
   }
   return newArray
}
function countDown(value) {
    while (value > -1)
    console.log(value--)
}