const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 250000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

//case cât nhập

//lắng nghe trả tương tác
let  hear = document.getElementById("product-form");
hear.addEventListener('submit',function(event){
    
    //để trang không load lại sử dụng event và lệnh preventDefault để dừng trang 
    event.preventDefault();

    //lấy giá trị từ 2 thanh đầu ra và cật nhập lên HTML
    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');

    const newName = nameInput.value.trim();
    const priceNew = Number(priceInput.value.trim());

    //tao mới object
    const newProduct = {
        id: products.length+1,
        name: newName,
        price: Number(priceNew),
    };
    products.push(newProduct);

    //Tạo mới thẻ li
    const productList = document.getElementById(`product-list`);
        //clear dữ liệu cũ
        productList.innerHTML = "";
    products.forEach((element) => {
        let newobject = document.createElement(`li`);
        newobject.className = "product-item" ; 
        newobject.innerHTML = `<div>
                    ID: ${element.id},
                    Tên: ${element.name},
                    Giá trị: ${element.price},
                    </div>`
        productList.appendChild(newobject);
    });
    //xoá sạch input 
    nameInput.value ="";
    priceInput.value ="";

});