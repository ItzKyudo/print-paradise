export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    stock: number;
    sold: number;
    rating: number;
    reviews: number;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    customer: string;
    date: string;
    total: string;
    status: 'Pending' | 'Shipped' | 'Delivered';
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Customer';
    joined: string;
}

export interface Service {
    id: string;
    title: string;
    desc: string;
    fullDesc: string;
    icon: JSX.Element;
}
