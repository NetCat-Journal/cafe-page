
export interface MenuItem {
    id: number;
    name: string;
    price: string;
    description: string;
    category: 'coffee' | 'food';
}

export const menuItems: MenuItem[] = [
    // Coffee
    {
        id: 1,
        name: "Flat White",
        price: "$80",
        description: "Smooth espresso with velvety microfoam",
        category: 'coffee'
    },
    {
        id: 2,
        name: "Cortado",
        price: "$65",
        description: "Equal parts espresso and steamed milk",
        category: 'coffee'
    },
    {
        id: 3,
        name: "Café con Leche",
        price: "$75",
        description: "Traditional Argentine coffee with milk",
        category: 'coffee'
    },
    {
        id: 4,
        name: "Americano",
        price: "$60",
        description: "Bold espresso with hot water",
        category: 'coffee'
    },
    {
        id: 5,
        name: "Cold Brew",
        price: "$85",
        description: "Smooth cold-steeped specialty coffee",
        category: 'coffee'
    },
    {
        id: 6,
        name: "Cappuccino",
        price: "$75",
        description: "Espresso with foamy steamed milk",
        category: 'coffee'
    },

    // Food
    {
        id: 7,
        name: "Medialunas",
        price: "$45",
        description: "Traditional Argentine croissants",
        category: 'food'
    },
    {
        id: 8,
        name: "Tostado",
        price: "$95",
        description: "Grilled ham and cheese sandwich",
        category: 'food'
    },
    {
        id: 9,
        name: "Avocado Toast",
        price: "$110",
        description: "Fresh avocado on sourdough with feta",
        category: 'food'
    },
    {
        id: 10,
        name: "Empanada",
        price: "$70",
        description: "Beef or cheese - Argentine style",
        category: 'food'
    },
    {
        id: 11,
        name: "Alfajor",
        price: "$50",
        description: "Dulce de leche cookie sandwich",
        category: 'food'
    },
    {
        id: 12,
        name: "Tostadas",
        price: "$55",
        description: "Toasted bread with butter and jam",
        category: 'food'
    }
];

export const coffeeItems = menuItems.filter(item => item.category === 'coffee');
export const foodItems = menuItems.filter(item => item.category === 'food');