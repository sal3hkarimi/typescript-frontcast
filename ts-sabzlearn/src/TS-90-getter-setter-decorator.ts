function GetProduct(
    target: object,
    methodName: string,
    decorator: PropertyDescriptor
) {
    const mainGetProduct = decorator.get;
    const mainSetProduct = decorator.set;

    decorator.set = function (product: string) {
        mainSetProduct?.call(this, { id: crypto.randomUUID(), name: product });
    };

    decorator.get = function () {
        const productList = mainGetProduct?.call(this) as object[];
        console.log(productList);
        return productList.map((p: any) => p.name);
    };
}

class Product {
    private _productList: string[] = [];

    set productList(product: string) {
        this._productList.push(product);
    }

    @GetProduct
    get productList(): string[] {
        return this._productList;
    }
}

const pList = new Product();
pList.productList = "Javascript";
pList.productList = "Typescript";
pList.productList = "Wordpress";

console.log(pList.productList);
