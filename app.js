//Script for demonstrating Functions in Javascript

/* this function computes the percentage */

function percentage(value, total) {
    return (value/total) * (100);
}

alert(percentage(500,1000)); /* Alerts 50 */




//script for demonstrating Closures in javascript

var arithmetic = function() {
    var privateVar = 0;
    function changeBy(val) {
        privateVar += val;
    }
    return {
        add: function(value) {
            changeBy(value);
        },
        subtract: function() {
            changeBy(-value);
        },
        value: function() {
            return privateVar;
        }
    };
};

var calculate1 = arithmetic();
var calculate2 = arithmetic();
alert(calculate1.value()); /* Alerts 0 */
calculate1.add(5);
calculate1.add(2);
alert(calculate1.value()); /* Alerts 7 */
alert(calculate2.value()); /* Alerts 0 */





//Script for demonstrating Prototypes in

function School(name, location, students) {
    this.name = name;
    this.location = location;
    this.students = students;

}

School.prototype.sport = "Rugby";


//demonstrating inheritance

function animal() {
    this.legs = 4;
    this.eyes = 2;
}

function mammal() {
    animal.call(this);

    this.legs = 2;
}


