export class Product {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: number[];

    constructor (data:any = {}){
        this.id = data.id || '';
        this.title = data.title || '';
        this.price = data.price || '';
        this.description = data.description || '';
        this.category = data.category || '';
        this.image = data.image || '';
        this.rating = data.rating || '';
    
    }

    // productId: number;
    // productName: string;
    // productSKU: string;
    // firstName: string;
    // productPrice: string;

    // constructor (data:any = {}){
    //     this.productId = data.productId || '';
    //     this.productName = data.productName || '';
    //     this.productSKU = data.productSKU || '';
    //     this.firstName = data.firstName || '';
    //     this.productPrice = data.productPrice || '';
    
    // }


}