const PRODUCT_ORDER = [
    {
        id: 1,
        orderNumber: 'ORD-2024-001',
        customerName: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '+1 (555) 123-4567',
        products: [
            {
                productId: 'TSH-BLK-M-001',
                name: 'Black T-Shirt',
                size: 'M',
                color: 'Black',
                quantity: 2,
                price: 19.99,
                description: 'A high-quality black t-shirt made from 100% cotton.',
                category: 'T-Shirts',
                brand: 'FashionX',
                rating: 4.5
            },
            {
                productId: 'JNS-BLU-32-002',
                name: 'Blue Slim Jeans',
                size: '32',
                color: 'Blue',
                quantity: 1,
                price: 49.99,
                description: 'A pair of stylish blue slim jeans made from 80% cotton and 20% polyester.',
                category: 'Jeans',
                brand: 'DenimX',
                rating: 4.8
            }
        ],
        totalAmount: 119.97,
        status: 'Shipped',
        paymentMethod: 'Credit Card',
        shippingAddress: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zipCode: '90210',
            country: 'USA'
        },
        orderDate: '2024-01-15T10:30:00Z',
        shippedDate: '2024-01-17T14:45:00Z',
        deliveryDate: '2024-01-20T10:00:00Z'
    },
    {
        id: 2,
        orderNumber: 'ORD-2024-002',
        customerName: 'Jane Smith',
        email: 'janesmith@example.com',
        phoneNumber: '+1 (555) 987-6543',
        products: [
            {
                productId: 'DRS-RED-S-003',
                name: 'Red Summer Dress',
                size: 'S',
                color: 'Red',
                quantity: 1,
                price: 89.99,
                description: 'A beautiful red summer dress made from 100% silk.',
                category: 'Dresses',
                brand: 'Fashionista',
                rating: 4.9
            }
        ],
        totalAmount: 89.99,
        status: 'Processing',
        paymentMethod: 'PayPal',
        shippingAddress: {
            street: '456 Oak Lane',
            city: 'Somewhere',
            state: 'NY',
            zipCode: '10001',
            country: 'USA'
        },
        orderDate: '2024-01-20T15:22:00Z',
        estimatedDeliveryDate: '2024-01-25T10:00:00Z'
    },
    {
        id: 3,
        orderNumber: 'ORD-2024-003',
        customerName: 'Bob Johnson',
        email: 'bobjohnson@example.com',
        phoneNumber: '+1 (555) 555-1234',
        products: [
            {
                productId: 'SHO-BLK-10-004',
                name: 'Black Sneakers',
                size: '10',
                color: 'Black',
                quantity: 2,
                price: 69.99,
                description: 'A pair of high-quality black sneakers made from 100% leather.',
                category: 'Shoes',
                brand: 'SneakerX',
                rating: 4.7
            }
        ],
        totalAmount: 139.98,
        status: 'Delivered',
        paymentMethod: 'Credit Card',
        shippingAddress: {
            street: '789 Park Ave',
            city: 'New York',
            state: 'NY',
            zipCode: '10002',
            country: 'USA'
        },
        orderDate: '2024-01-22T12:00:00Z',
        shippedDate: '2024-01-24T14:00:00Z',
        deliveryDate: '2024-01-26T10:00:00Z'
    }
];

export default PRODUCT_ORDER;