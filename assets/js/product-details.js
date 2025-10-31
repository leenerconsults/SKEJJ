document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = window.products.find(p => p.id === productId);

  if (!product) {
    document.querySelector(".product-detail").innerHTML =
      "<p>Product not found!</p>";
    return;
  }

  // Update product details
  document.querySelector(".title-detail").textContent = product.name;
  document.querySelector(".breadcrumb a:nth-child(2)").textContent = product.category;
  document.querySelector(".current-price").textContent = `£${product.price}`;
  document.querySelector(".old-price").textContent = `£${product.oldPrice}`;
  document.querySelector(".save-price").textContent = product.discount;
  document.querySelector(".short-desc p").textContent = product.description;
  document.querySelector(".in-stock").textContent = `${product.stock} Items In Stock`;
  document.querySelector(".product-rating").style.width = `${product.rating}%`;
  document.querySelector(".detail-info ul:nth-child(1) li:nth-child(1) span").textContent = "Organic";

  // Product images
  const imageSlider = document.querySelector(".product-image-slider");
  const thumbSlider = document.querySelector(".slider-nav-thumbnails");
  imageSlider.innerHTML = "";
  thumbSlider.innerHTML = "";

  product.images.forEach(img => {
    imageSlider.innerHTML += `<figure class="border-radius-10"><img src="${img}" alt="product image" /></figure>`;
  });

  product.thumbnails.forEach(img => {
    thumbSlider.innerHTML += `<div><img src="${img}" alt="thumbnail" /></div>`;
  });
});
