let Class = "Hopper Lab";
let Subject = "JavaScript";
let Dat = 10_8_2022;


// Callback function
setTimeout(function(){
    console.log(Class);
}, 1000);

setTimeout(function(){
    console.log(Subject);
}, 2000);

setTimeout(function(){
    console.log(Dat);
}, 3000);


// This Identifier is been used to access name valiable in nested function 
var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name); // the output will be bar because name is defined as bar
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);// this function will output will undefined because it can't access the value
            console.log("inner func:  self.name = " + self.name);// this function the output will be bar because self.name can access the value in nested function as well.
        }());
    }
};

hopperLab.func();