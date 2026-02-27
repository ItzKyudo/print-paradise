import React from "react";
import { Product, Service, Order, User } from "../types";

export const SHOP_PRODUCTS: Product[] = [
    { id: 1, name: "YOLYOLAC", price: "₱69.00", image: "/shop-images/yolyolac.jpg", category: "Apparel", stock: 150, sold: 0, rating: 4.8, reviews: 342 },
    { id: 2, name: "Tshirt Design", price: "₱10.00", image: "/shop-images/tshirt.jpg", category: "Schoolwear", stock: 50, sold: 850, rating: 4.5, reviews: 128 },
    { id: 3, name: "BSCPE", price: "₱300.00", image: "/shop-images/bscpe.jpg", category: "Schoolwear", stock: 25, sold: 150, rating: 4.9, reviews: 89 },
    { id: 4, name: "Varsity T-shirt", price: "₱200.00", image: "/shop-images/varsity.jpg", category: "Sportswear", stock: 80, sold: 430, rating: 4.7, reviews: 215 }
];

export const SERVICES: Service[] = [
    {
        id: 's1',
        title: "All-Over Printing",
        desc: "Edge-to-edge sublimation that covers the entire garment with your stunning, high-resolution designs.",
        fullDesc: "Our all-over printing process ensures your design flows seamlessly across the entire garment, unbounded by traditional print areas. This service is perfect for bold, highly visual street style or promotional wear that demands attention.",
        icon: React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })
    },
    {
        id: 's2',
        title: "Custom Uniforms",
        desc: "Durable, breathable, and fade-resistant sublimated jerseys and team wear built for performance.",
        fullDesc: "We specialize in high-performance athletic wear. Our sublimated jerseys never crack, peel, or fade, ensuring your team looks professional season after season. Customize every inch with player names, numbers, and sponsor logos.",
        icon: React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
    },
    {
        id: 's3',
        title: "Personalized Tees",
        desc: "One-of-a-kind t-shirts created with a process that embeds ink deeply into the fabric for a soft feel.",
        fullDesc: "Create truly unique custom t-shirts. Because the ink becomes part of the fabric itself, the print feels incredibly soft and breathes naturally, making it much more comfortable than traditional screen printing.",
        icon: React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
    }
];

export const MOCK_ORDERS: Order[] = [
    { id: "ORD-001", customer: "Juan Dela Cruz", date: "2023-10-25", total: "₱369.00", status: "Shipped" },
    { id: "ORD-002", customer: "Maria Clara", date: "2023-10-26", total: "₱200.00", status: "Pending" },
    { id: "ORD-003", customer: "Jose Rizal", date: "2023-10-26", total: "₱1,200.00", status: "Delivered" },
];

export const MOCK_USERS: User[] = [
    { id: "USR-001", name: "Admin Setup", email: "admin@example.com", role: "Admin", joined: "2023-01-01" },
    { id: "USR-002", name: "Juan Dela Cruz", email: "juan@example.com", role: "Customer", joined: "2023-05-15" },
    { id: "USR-003", name: "Maria Clara", email: "maria@example.com", role: "Customer", joined: "2023-08-22" },
];
