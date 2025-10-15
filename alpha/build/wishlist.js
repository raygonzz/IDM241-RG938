const mainButtonsContainer = document.getElementById('wishlist-main-buttons');
const addButton = document.getElementById('wishlist-add-btn');
const removeButton = document.getElementById('wishlist-remove-btn');
const dropdownContainer = document.getElementById('wishlist-dropdown-container');
const addTooltip = document.getElementById('tooltip-add');
const removeTooltip = document.getElementById('tooltip-remove');
const feedbackNotice = document.getElementById('wishlist-feedback-notice');
const removeFromDropdownBtn = document.getElementById('remove-from-wishlist');
const manageWishlistBtn = document.getElementById('manage-wishlist');

document.getElementById('wishlist-toggle-container').addEventListener('click', (event) => {
  if (event.target.closest('.dropdown-menu-item') || event.target.closest('#dropdown-chevron-btn')) {
      return; 
  }

  const isAdding = !addButton.classList.contains('hidden');

    if (isAdding) {
        mainButtonsContainer.style.width = '140px'; 
        feedbackNotice.classList.remove('hidden');
        feedbackNotice.classList.add('show-notice');
    } else {
        mainButtonsContainer.style.width = '170px'; 
        feedbackNotice.classList.remove('show-notice');
        feedbackNotice.classList.add('hidden');
    }

  addButton.classList.toggle('hidden');
  removeButton.classList.toggle('hidden');
  dropdownContainer.classList.toggle('hidden');
  addTooltip.classList.toggle('hidden');
  removeTooltip.classList.toggle('hidden');
});

removeFromDropdownBtn.addEventListener('click', () => {
    mainButtonsContainer.style.width = '170px'; 
    feedbackNotice.classList.remove('show-notice');
    feedbackNotice.classList.add('hidden');

    addButton.classList.remove('hidden');
    removeButton.classList.add('hidden');
    dropdownContainer.classList.add('hidden');
    addTooltip.classList.remove('hidden');
    removeTooltip.classList.add('hidden');
});

manageWishlistBtn.addEventListener('click', () => {
    window.open('https://www.google.com/', '_blank'); 
});