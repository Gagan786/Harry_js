const event = {
    name: "harry",
    printGuessList: () => {
        console.log("guess list is " + event.name);
        return "";
    }
}
const event2 = {
    name: "birthday Party",
    guestList : ['harry', 'ginny', 'micky'],
    printGuessList() {
        console.log('guest list for ' + this.name);
        this.guestList.forEach(function (guest) {
            console.log("invited guest " + guest  + " :" + event2.name);
        })
    }
}

console.log(event.printGuessList());
console.log(event2.printGuessList());

