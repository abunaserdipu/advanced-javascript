//When javascript give you falsy output
//when you use 0;
//empty string "";
//false;
//undefined;
//null;
//NaN

//When javascript give you truthy output
//"0", " ", [], {}
//Number truthy falsy
const number = 0;
if (number) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//String truthy falsy
const string = "";
if (string) {
  console.log("truthy");
} else {
  console.log("falsy");
}
