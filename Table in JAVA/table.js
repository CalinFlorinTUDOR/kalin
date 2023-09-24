let btnGet = document.querySelector("button");
let myTable = document.querySelector("#table");

let students = [

    { fname:"Ion" , lname:"Alexandru" , age:"12" },
    { fname:"Preda" , lname:"Marin" , age:"14" },
    { fname:"Serpescu" , lname:"Iguan" , age:"16" },
    { fname:"Ratusca" , lname:"Rica" , age:"15" },
    { fname:"Preda" , lname:"Mihai" , age:"13" },
    { fname:"Asaf" , lname:"Amir" , age:"23" }
]

let headers = [ "First Name" , "Last Name" , "Age"];

btnGet.addEventListener("click", () => {

    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
        
    })
    table.appendChild(headerRow);

    students.forEach(stds => {

    let row = document.createElement("tr");

    Object.values(stds).forEach(text => {

        let cell = document.createElement("td");
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    table.appendChild(row);
}) 
    myTable.appendChild(table);
})
