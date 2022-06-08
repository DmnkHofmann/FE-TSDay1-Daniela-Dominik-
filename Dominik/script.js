"use strict";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        let resultString = `${j} x ${i} = ${result}`;
        console.log(resultString);
    }
}
let fullName = { fName: "Dominik", lName: "Hofmann" };
document.getElementById("myTable").innerHTML = fullName.fName + " " + fullName.lName;
let nArray = [fullName, fullName, fullName, fullName, fullName, fullName, fullName, fullName, fullName, fullName];
for (let i = 0; i <= 1; i++) {
    nArray.forEach(function () {
        document.getElementById("myTable").innerHTML += `my Name is ${nArray[i].fName} `;
    });
}
