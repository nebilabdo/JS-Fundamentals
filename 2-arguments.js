const argsCount = process.argv.slice(2);

if (argsCount[0] === undefined) {
  console.log("No argument");
} else if (argsCount[1] === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
