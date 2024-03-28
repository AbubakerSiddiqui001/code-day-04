import { visitEachChild } from "typescript";

let guests: string[] = ["Albert Einsten, Marie Curie, Elon Musk"];
console.log("Great news! I found a bigger dinner table");

// Adding more guests
guests.unshift(`Newton`);
guests.splice(guests.length / 2 , 0, "Charles Darwin");
guests.push("Ada lovelace");

guests.forEach(guest =>{
    console.log(`Dear ${guest}. would you like to join me for dinner?`);
});



console.log("Unfortunately, I can only invite two people for dinner.");
while(guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to in Dinner!`);
};

guests.forEach(guests =>{
    console.log(`Dear, ${guests}. You'r still invite in Dinner`);
});

guests.splice(0, guests.length);
// shows an empty list
console.log(guests);     


// Alphabet serial & Reverse vise in color
let places: string[] = ["Newzealend", "Iceland", "Japan", "Pakistan", "Switzerland"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.sort();
console.log("Alphabetic order:", places);

places.reverse();
console.log("Reverse Alphabetical order:", places);
