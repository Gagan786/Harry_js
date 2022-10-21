const notes = require("./notes.js");
const fs = require("fs");
const os = require("os");
const yargs = require("yargs");
console.log("Hi this is from scratch");
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "add a body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    notes.addNote(yargs.argv.title, yargs.argv.body);
    console.log("Adding a new note");
  },
});
//create a remove command
yargs.command({
  command: "remove",
  describe: "removing a new note",
  builder: {
    title: {
      describe: "make a title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    notes.removeNote(yargs.argv.title);
  },
});
//create a list command
yargs.command({
  command: "list",
  describe: "list to do",
  handler: function () {
    console.log("this is list to add to task");
    notes.listNode();
  },
});
// createa  a read command
yargs.command({
  command: "read",
  describe: "to read a list",
  buiider: {
    title: {
      describe: "Reading a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Reading a list which was added to task");
    notes.readNote(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv.title);
