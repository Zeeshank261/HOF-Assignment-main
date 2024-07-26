
// prices in USD
const storeItemsList = [
    { item: 't-shirt', price: 10 },
    { item: 'jeans', price: 30 },
    { item: 'jacket', price: 60 },
    { item: 'shoes', price: 50 },
    { item: 'socks', price: 5 },
];

const storeItemsNewList = storeItemsList.map((v) => {
    return {
        item: v.item,
        price: v.price*80
    };
});

console.log(storeItemsNewList)




