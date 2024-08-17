let store = new Store("DANH SÁCH SẢN PHẨM");

function add() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(name, id, status, price, image);
    store.add(newProduct);

    getAllProduct();

    document.getElementById("name").value = '';
    document.getElementById("id").value = '';
    document.getElementById("status").value = '';
    document.getElementById("price").value = '';
    document.getElementById("image").value = '';

}
function getAllProduct() {
    let list = store.getListProduct();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
                <tr>
                    <td>${list[i].name}</td>
                    <td>${list[i].id}</td>
                    <td>${list[i].status}</td>
                    <td>${list[i].price}</td>
                    <td><img src="${list[i].image}" alt=""></td>
                    <td><button onclick="deleteAction(${i})"><i class="fa-solid fa-trash-can" style="color: #c20f0f;"></i></button></td>
                    <td><button onclick="showProductEdit(${i})"><i class="fa-solid fa-pen-to-square"></i></button></td>
                </tr>
        `
    }
    document.getElementById("tablist").innerHTML = html;
}

function showProductEdit (index) {
    let oldProduct = store.getProductEdit(index);
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("status").value = oldProduct.status;
    document.getElementById("price").value = oldProduct.price;
    document.getElementById("image").value = oldProduct.image;
    document.getElementById("btn").innerHTML = `<button onclick="edit(${index})">Lưu</button>`;
    getAllProduct();
}

function edit(index) {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(name, id, status, price, image);
    store.edit(index, newProduct);
    alert('Sửa thành công!');

    getAllProduct();

    document.getElementById("name").value = '';
    document.getElementById("id").value = '';
    document.getElementById("status").value = '';
    document.getElementById("price").value = '';
    document.getElementById("image").value = '';
    document.getElementById("btn").innerHTML = `<button onclick="add(${index})">Thêm sản phẩm</button>`
}

function deleteAction(index) {
    let isConfirm = confirm('Xác nhận xóa?')
        if (isConfirm) {
            store.deleteAction(index);
            getAllProduct();
        }
}

function OnAnotherPage() {
    let list = store.getListProduct();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
            <div class="box">
                <img src="${list[i].image}" alt="${list[i].name}"> 
                <h4>${list[i].name}</h4>
                <p>${list[i].price}/kg</p>
                <div><button>Chọn mua <i class="fa-solid fa-cart-plus"></i></button></div>
            </div>
        `;
    }
    document.getElementById("productDetailsOnAnotherPage").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    getAllProduct();
    OnAnotherPage();
});

OnAnotherPage();
getAllProduct();