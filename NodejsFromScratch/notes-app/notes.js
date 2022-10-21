const fs = require('fs');
const { title } = require('process');
const addNote = (title,body) =>  {
    // return loadNote();
    const notes = loadNote();
    const duplicateNotes = notes.filter(function(ele){
        return ele.title === title;
    })
    
    if (duplicateNotes.length == 0) {
        notes.push({
          title: title,
          body: body,
        });
        saveNotes(notes);

        console.log('NEW NOTE ADDED!');
    }
    else {
        console.log('NOTE TITLE TAKEN!')
    }

    
}
const removeNote = (title) => {
    const notes = loadNote();
    const notesExist = notes.filter(function (ele) {
        return ele.title !== title;
    })
    if (notes.length > notesExist.length ) {
        console.log("NOTE TITLE REMOVED"); 
        saveNotes(notesExist); 
    } else {
        console.log("NOTE TITLE NOT FOUND");
    }
    
}
const listNode = () => {
    console.log("Your Notes");
    const notes = loadNote();
    notes.forEach(ele => { consol.log(ele.title); });
    console.log(list);
}

const readNote = (title) => {
    console.log("this is a reading note");
    const notes = loadNote();
    // const nodePresence = notes.filter(note => note.title === title);
    const nodePresence = notes.find(note => note.title === title);
    if (nodePresence == undefined) {
        console.log("note not found");
    }
    else { console.log(nodePresence.body); }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);    
}

const loadNote = () => {
    // try {
        const bufferData = fs.readFileSync('./notes.json');
    const dataJSON = bufferData.toString();
    // console.log(dataJSON);
        return JSON.parse(dataJSON);
    // }
    // catch (e) {
    //     console.log();
    //     return [];    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNode: listNode,
    readNote : readNote
 }