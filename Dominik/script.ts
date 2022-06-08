    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            let result: number = i * j;
            let resultString: string = `${j} x ${i} = ${result}`;
            console.log(resultString);
        }
    }

    let fullName = {fName: "Dominik", lName: "Hofmann"};
    (document.getElementById("myTable")as HTMLElement).innerHTML =fullName.fName + " "+ fullName.lName
    let nArray = [fullName,fullName,fullName,fullName,fullName,fullName,fullName,fullName,fullName,fullName]
    for (let i = 0; i <= 1; i ++){
    nArray.forEach(function(){
    (document.getElementById("myTable")as HTMLElement).innerHTML+=`my Name is ${nArray[i].fName} `
})}