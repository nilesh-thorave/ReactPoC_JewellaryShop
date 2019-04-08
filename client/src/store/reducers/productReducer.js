const initstate = {
    error: null,
    isLoaded: true,
    itemsPerPage: 12,
    currentPage: 1,
    products: [{
        category: "earing",
        id: "5c99bfb57fc52926c429300f",
        image: "/images/img5.jpg",
        metal: "Gold",
        price: 40000,
        title: "Earing",
        weight: 15
    }]
}
const productReducer = (state = initstate, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            const products = action.payload;
            let isLoaded = true;
            return {
                ...state,
                products,
                isLoaded
            };

        case "GET_ALL_PRODUCTS_ERROR":
            isLoaded = true;
            const error = action.payload;
            return {
                ...state,
                isLoaded,
                error
            };

        default:
            return state;
        }
}

export default productReducer;