document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('Add your Pinterest, shop, product, or social-media link here.');
  });
});
