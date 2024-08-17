class Store {
    name
    listProduct
    constructor(nameInput) {
        this.name = nameInput;
        this.getStorage();
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
        this.saveStorage();
    }

    getListProduct() {
        return this.listProduct;
    }

    deleteAction(index) {
        this.listProduct.splice(index, 1);
        this.saveStorage();
    }

    getProductEdit(index) {
        let Product = this.listProduct[index];
        return Product;
    }

    edit(index, newProduct) {
        this.listProduct[index] = newProduct;
        this.saveStorage();
    }

    saveStorage() {
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }

    getStorage() {
        let list = JSON.parse(localStorage.getItem("listProduct"));
        if(list == null) {
            this.listProduct = [];
        } else {
            this.listProduct = list;
        }
    }
}