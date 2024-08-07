const products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 1200,
      quantity: 10,
      available: true,
    },
    {
      name: "Chair",
      category: "Furniture",
      price: 100,
      quantity: 20,
      available: true,
    },
    {
      name: "Shirt",
      category: "Clothing",
      price: 30,
      quantity: 50,
      available: false,
    },
    {
      name: "Book",
      category: "Books",
      price: 20,
      quantity: 100,
      available: true,
    },
  ];
  
  const filteredProducts = products.filter(
    (product) => product.category === "Electronics"
  );
  
  const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
  
  const productsWithTotalValue = products.map((product) => ({
    ...product,
    totalValue: product.price * product.quantity,
  }));
  
  const inventoryReport = products.reduce(
    (report, product) => {
      report.totalProducts += 1;
      report.totalValue += product.price * product.quantity;
      report.avgPrice = report.totalValue / report.totalProducts;
  
      if (report.categoryDistribution[product.category]) {
        report.categoryDistribution[product.category] += 1;
      } else {
        report.categoryDistribution[product.category] = 1;
      }
  
      return report;
    },
    {
      totalProducts: 0,
      totalValue: 0,
      avgPrice: 0,
      categoryDistribution: {},
    }
  );
  
  console.log("Filtered Products:", filteredProducts);
  // Output should be:
  // [
  //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },
  // ]
  
  console.log("Sorted Products by Price:", sortedProducts);
  // Output should be:
  // [
  //     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
  //     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
  //     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
  //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
  // ]
  
  console.log("Products with Total Value:", productsWithTotalValue);
  // Output should be:
  // [
  //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
  //     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
  //     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
  //     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
  // ]
  
  console.log("Inventory Report:", inventoryReport);
  // Output should be:
  // {
  //     totalProducts: 4,
  //     totalValue: 17500,
  //     avgPrice: 4375,
  //     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
  // }