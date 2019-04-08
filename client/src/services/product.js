import earing from "../images/img5.jpg";
import ring from "../images/img10.jpg";
import neckless from "../images/img1.jpeg";
import request from 'requestretry';

import { defaultRequestBody, apiPaths} from '../constants/constats';

class Product {
    apiPath = apiPaths.product;
    constructor() {
        this.productList = [{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1234"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1234"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1234"
        },
        {
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1235"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1235"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1235"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1236"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1236"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1236"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1237"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1237"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1237"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1238"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1238"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1238"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1239"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1239"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1239"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1240"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1240"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1240"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1241"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1241"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1241"
        },{
            title: "Earing",
            price: 40000,
            metal: "Gold",
            weight: 15,
            image: earing,
            category: "earing",
            id: "ERNG1241"
        },{
            title: "Ring",
            price: 100000,
            metal: "Platinum",
            weight: 12,
            image: ring,
            category: "ring",
            id: "RNG1241"
        },{
            title: "Neckless",
            price: 767000,
            metal: "Gold",
            weight: 200,
            image: neckless,
            category: "neckless",
            id: "NKLS1241"
        }]
    }
    /**
     * @description Function to return product list.
     * @returns - Promise - resolved when product list is retrieved successfully else rejected.
     */
    getAllProducts(){
        return new Promise((resolve, reject)=>{
            const url = defaultRequestBody.url + this.apiPath;
            const requestBody = { ...defaultRequestBody, url};
            request.get(requestBody).then(response => {
                if (response.statusCode === 200) {
                resolve(response.body)
                }
                else{
                    reject({message: "Unable to retrieve products."});
                }
            }, error => reject({message: "Unable to retrieve products."}));
        })
    }
}

export default new Product();