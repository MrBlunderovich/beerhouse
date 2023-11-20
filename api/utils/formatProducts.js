function formatProducts(data) {
  return data.map(formatSingleProduct);
}

function formatSingleProduct(product) {
  return {
    id: product._id,
    name: product.name,
    unit: product.unit,
    quantity: product.quantity,
    price: product.price,
    category: product.category,
    state: product.condition,
    identification_number: product.barcode,
    created_at: new Date(product.created_at).toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    updated_at: new Date(product.updated_at).toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  };
}

module.exports = { formatProducts, formatSingleProduct };
