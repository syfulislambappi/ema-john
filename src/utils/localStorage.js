export const saveProduct = (product) => {
   const productKey = product.key;
   const products = {};
   const localDb = localStorage.getItem('products');
   const localDbParsed = JSON.parse(localDb);
   if(!localDb) {
      products[productKey] = 1;
      localStorage.setItem('products', JSON.stringify(products));
   } else {
      if(localDbParsed[productKey]) {
         localDbParsed[productKey] = localDbParsed[productKey] + 1;
         localStorage.setItem('products', JSON.stringify(localDbParsed));
      } else {
         localDbParsed[productKey] = 1;
         localStorage.setItem('products', JSON.stringify(localDbParsed));
      }
   }
}

export const loadProduct = (products) => {
   const productData = JSON.parse(localStorage.getItem('products'));
        let localDb = [];
        for(const productItem of products) {
            for(const item in productData) {
                if(productItem.key === item) {
                    const price = productItem.price;
                    for(let i = 1; i <= productData[item]; i++) {
                        localDb.push(price);
                    }
                }
            }
        }
   return localDb;
}
