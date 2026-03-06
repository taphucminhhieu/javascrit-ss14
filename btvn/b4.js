const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 250000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const mind = () => {
  let list = document.getElementById("product-list");
  
  //clear dữ liệu cũ 
  list.innerHTML = "";
  
  products.forEach((product) => {
    //tạo ra thẻ li mới trong cha
    let newList = document.createElement("li")
    
    //thêm nội dung vào thẻ 
    newList.innerHTML = `<div>
    ID: ${products.id},
    Tên: ${products.name},
    Giá trị: ${products.price},
    <button onclick = "UpdatePrice(${products.id})">Nhập giá mới</button>
    </div>`;
    //cập nhập giao diện bằng thẻ appendChild vào thẻ cah
    list.appendChild(newList);
  });
};
//even
let buttonAddElement = document.getElementsByTagName("button")[0];
let buttonUpdateElement = document.getElementById("update");
let inputElement = document.getElementById("product-input"); 
let idUpdate;

//cật nhập
const UpdatePrice = (idProducts) => {
    let indexProducts = products.find((products) => {
        return products.id === idProducts;
    });
    inputElement.value = productFound.name;

    buttonAddElement.style.display = "none";
    buttonUpdateElement.style.display="inline";
    //.forcus()
    inputElement.focus();
    idUpdate = idProducts;
};

const handleChangeDataUpdate = () => {
    let newNameProduct = inputElement.value;
    let indexProducts = products.findIndex((p) => p.id === idUpdate);
        products[indexProducts].name = newNameProduct;
    
};

buttonUpdateElement.addEventListener("click".handleChangeDataUpdate);
mind();