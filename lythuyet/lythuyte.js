//Dom

//Element
//Atr
//Text

console.groupCollapsed(({document}));

//Element: các thẻ

//cách truy suất :
//Cách lấy thẻ
let itemElement = document.getElementById(`item_01`)

console.log(itemElement);

let ulElement = document.getElementById(`list`)

console.log(ulElement);

let listItemElement = document.getElementsByClassName(`item`)
console.log(listItemElement);

console.log(listItemElement.length);

console.log(Array.from(listItemElement));

Array.from(listItemElement).forEach((elmenet)=>{
    console.log(elmenet.innerHTML)
});

let listDivElement = document.getElementsByTagName("ul")
console.log({ data: listDivElement[0] });
//console.log(listDivElement[8])

let listItemElementQuery = document.querySelectorAll(".item")
console.log(listItemElementQuery);

let listElement  = document.getElementById("list");
console.log(listElement.innerText);
console.log(listElement.innerHTML);
console.log(listElement.textContent);

let itemChangeElement = document.querySelectorAll("#item_01")[0];
itemChangeElement.innerText = "XEM PHIM"

console.log(itemChangeElement.classList);

itemChangeElement.classList.add("delete");
itemChangeElement.classList.remove("item_v1");
console.log(itemChangeElement.classList.contains("delete"));
itemChangeElement.classList.toggle("firts_element");

if(itemChangeElement.classList.contains("firt_element")){
    itemElement.classList.remove("firt_element");
}else{
    itemChangeElement.classList
}

