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
  
  products.forEach((products) => {
    //tạo ra thẻ li mới trong cha
    let newList = document.createElement("li")
    
    //thêm nội dung vào thẻ 
    newList.innerHTML = `<div>
    ID: ${products.id},
    Tên: ${products.name},
    Giá trị: ${products.price},
    <button onclick = Delete(${products.id})>Delete</button>
    </div>`;
    //cập nhập giao diện bằng thẻ appendChild vào thẻ cah
    list.appendChild(newList);
  });
};

mind();

//case xoá 
const Delete = (idProducts) => {
    let indexProducts = products.findIndex((products) => {
        return products.id  === idProducts;
    });
    products.splice(indexProducts,1);
    mind();
}
