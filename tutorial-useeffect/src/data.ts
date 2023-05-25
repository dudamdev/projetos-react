const products = [
    {
        id: 1,
        name: "TV",
        price: 2000.0
    },
    {
        id: 2,
        name: "Computador",
        price: 2500.0
    }
]

export function findPoduct(id: number) {
    return products.find(x => x.id === id)
}