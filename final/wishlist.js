const mainButtonsContainer = document.getElementById('wishlist-main-buttons');
const addButton = document.getElementById('wishlist-add-btn');
const removeButton = document.getElementById('wishlist-remove-btn');
const dropdownContainer = document.getElementById('wishlist-dropdown-container');
const removeFromDropdownBtn = document.getElementById('remove-from-wishlist');
const manageWishlistBtn = document.getElementById('manage-wishlist');

const wishlistTooltip = document.getElementById('wishlist-tooltip');

let isAnimating = false;
const animationDuration = 400;

document.getElementById('wishlist-toggle-container').addEventListener('click', (event) => {
  if (event.target.closest('.dropdown-menu-item') || event.target.closest('#dropdown-chevron-btn') || event.target.closest('.dropdown-note-container')) {
    return;
  }

  if (isAnimating) {
    return;
  }
  
  isAnimating = true;

  const isAdding = !addButton.classList.contains('hidden');

  if (isAdding) {
    mainButtonsContainer.style.width = '145px';
  } else {
    mainButtonsContainer.style.width = '170px';
  }

  addButton.classList.toggle('hidden');
  removeButton.classList.toggle('hidden');
  dropdownContainer.classList.toggle('hidden');

  if (isAdding) {
    wishlistTooltip.dataset.state = 'remove';
  } else {
    wishlistTooltip.dataset.state = 'add';
  }

  setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
});


removeFromDropdownBtn.addEventListener('click', () => {
  if (isAnimating) {
    return;
  }
  
  isAnimating = true;
  
  mainButtonsContainer.style.width = '170px';

  addButton.classList.remove('hidden');
  removeButton.classList.add('hidden');
  dropdownContainer.classList.add('hidden');

  wishlistTooltip.dataset.state = 'add';

  setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
});


manageWishlistBtn.addEventListener('click', () => {
  window.open('https://www.google.com/', '_blank');
});