const products = [
    { id: 'fc-1888', name: 'Flux Capacitor' },
    { id: 'fc-2050', name: 'Power Laces' },
    { id: 'fs-1987', name: 'Hoverboard' },
    { id: 'ac-2000', name: 'Anti-Gravity Shoes' },
    { id: 'dp-1999', name: 'Dark Portal Generator' }
  ];
  
  const selectElement = document.getElementById('productName');
  
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
  