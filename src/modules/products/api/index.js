const fetchProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 'product-18b9a98e-812d-4627-95e0-994245a137ee',
        type: 'shoe',
        brand: 'adidas Originals',
        model: 'PW TENNIS HU - Sneaker low',
      },
      {
        id: 'product-4eaf41ba-0632-4d51-9a11-7921ea819e0f',
        type: 'shoe',
        brand: 'Vans',
        model: 'OLD SKOOL - skate shoe',
      },
      {
        id: 'product-cc2bfba2-207e-49ba-b942-3c79c24d6665',
        type: 'shoe',
        brand: 'adidas Originals',
        model: 'TUBULAR SHADOW - Sneaker low',
      },
      {
        id: 'product-5ccca7c3-2bef-4c9e-bb4a-cffc2534b217',
        type: 'shoe',
        brand: 'Nike SB',
        model: 'STEFAN JANOSKI MAX - Sneaker low',
      },
    ]);
  }, 750);
});

export default {
  fetchProducts,
};
