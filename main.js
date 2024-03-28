var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Albert Einsten, Marie Curie, Elon Musk"];
console.log("Great news! I found a bigger dinner table");
// Adding more guests
guests.unshift("Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada lovelace");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ". would you like to join me for dinner?"));
});
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to in Dinner!"));
}
;
guests.forEach(function (guests) {
    console.log("Dear, ".concat(guests, ". You'r still invite in Dinner"));
});
guests.splice(0, guests.length);
// shows an empty list
console.log(guests);
var places = ["Newzealend", "Iceland", "Japan", "Pakistan", "Switzerland"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.sort();
console.log("Alphabetic order:", places);
places.reverse();
console.log("Reverse Alphabetical order:", places);
