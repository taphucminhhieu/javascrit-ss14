const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 250000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

//lấy element là thẻ list 
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
    </div>`;
    //cập nhập giao diện bằng thẻ appendChild vào thẻ cah
    list.appendChild(newList);
  });
};

mind();

