// Variables pour cibler les éléments
const items = document.querySelectorAll('.cart-item'); // Sélectionner tous les articles
const totalPriceElement = document.getElementById('total-price');

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  let totalPrice = 0;
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').innerText);
    const quantity = parseInt(item.querySelector('.item-quantity').innerText);
    totalPrice += price * quantity;
  });
  totalPriceElement.innerText = totalPrice.toFixed(2); // Mise à jour du prix total
}

// Fonction pour ajuster la quantité
items.forEach(item => {
  const addButton = item.querySelector('.add-quantity');
  const minusButton = item.querySelector('.minus-quantity');
  const quantityElement = item.querySelector('.item-quantity');
  
  // Augmenter la quantité
  addButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
    updateTotalPrice(); // Met à jour le prix total après l'ajustement
  });

  // Diminuer la quantité
  minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
      updateTotalPrice(); // Met à jour le prix total après l'ajustement
    }
  });
});

// Fonction pour supprimer un article
items.forEach(item => {
  const removeButton = item.querySelector('.remove-item');
  
  removeButton.addEventListener('click', () => {
    item.remove(); // Supprime l'article du DOM
    updateTotalPrice(); // Met à jour le prix total après suppression
  });
});

// Fonction pour aimer un article (cœur)
items.forEach(item => {
  const likeButton = item.querySelector('.like-item');
  
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked'); // Ajoute/enlève la classe "liked" pour changer la couleur du cœur
  });
});

// Initialiser le prix total
updateTotalPrice();
