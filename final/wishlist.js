// --- Get DOM Elements ---
const mainButtonsContainer = document.getElementById('wishlist-main-buttons');
const addButton = document.getElementById('wishlist-add-btn');
const removeButton = document.getElementById('wishlist-remove-btn');
const dropdownContainer = document.getElementById('wishlist-dropdown-container');
const removeFromDropdownBtn = document.getElementById('remove-from-wishlist');
const manageWishlistBtn = document.getElementById('manage-wishlist');

// --- NEW: Get the single tooltip element ---
const wishlistTooltip = document.getElementById('wishlist-tooltip');
// (We no longer need addTooltip or removeTooltip)

// --- NEW: Animation lock flag ---
let isAnimating = false;
const animationDuration = 400; // This MUST match your CSS transition duration (0.45s)

// --- Main Toggle Button Click ---
document.getElementById('wishlist-toggle-container').addEventListener('click', (event) => {
  // Ignore clicks on the dropdown menu items
  if (event.target.closest('.dropdown-menu-item') || event.target.closest('#dropdown-chevron-btn')) {
    return;
  }

  // --- NEW: Check the animation lock ---
  if (isAnimating) {
    return; // Animation in progress, do nothing
  }
  
  // --- NEW: Set the lock ---
  isAnimating = true;

  // Check which button is *currently* visible
  const isAdding = !addButton.classList.contains('hidden');

  // Adjust container width
  if (isAdding) {
    mainButtonsContainer.style.width = '140px'; // Shrink for dropdown
  } else {
    mainButtonsContainer.style.width = '170px'; // Expand back
  }

  // Toggle buttons and dropdown
  addButton.classList.toggle('hidden');
  removeButton.classList.toggle('hidden');
  dropdownContainer.classList.toggle('hidden');

  // --- UPDATED: Change tooltip state ---
  if (isAdding) {
    // We just clicked "Add", so show the "Remove" tooltip
    wishlistTooltip.dataset.state = 'remove';
  } else {
    // We just clicked "Remove", so show the "Add" tooltip
    wishlistTooltip.dataset.state = 'add';
  }

  // --- NEW: Release the lock after the animation finishes ---
  setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
});


// --- Dropdown Menu: "Remove from wishlist" Click ---
removeFromDropdownBtn.addEventListener('click', () => {
  // --- NEW: Check the animation lock ---
  if (isAnimating) {
    return; // Animation in progress, do nothing
  }
  
  // --- NEW: Set the lock ---
  isAnimating = true;
  
  // Reset container width
  mainButtonsContainer.style.width = '170px';

  // Reset buttons to "Add" state
  addButton.classList.remove('hidden');
  removeButton.classList.add('hidden');
  dropdownContainer.classList.add('hidden');

  // --- UPDATED: Reset tooltip to "Add" state ---
  wishlistTooltip.dataset.state = 'add';

  // --- NEW: Release the lock after the animation finishes ---
  setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
});


// --- Dropdown Menu: "Manage wishlist" Click ---
manageWishlistBtn.addEventListener('click', () => {
  window.open('https://www.google.com/', '_blank');
});