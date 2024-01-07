// Function to add an item to the shopping cart
function addToCart(item) {
  // Retrieve the existing cart from localStorage or initialize a new one if none exists
  let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  // Push the new item into the cart array with a quantity of 1
  cart.push({...item, quantity: 1});
  // Update the cart in localStorage with the new item added
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Function that runs when the window is loaded
window.onload = function() {
  // Retrieve the selected item and its type from sessionStorage
  var selectedItem = JSON.parse(sessionStorage.getItem('selectedItem'));
  var selectedItemType = sessionStorage.getItem('selectedItemType');

  // Check if the selected item and its type are available
  if (selectedItem && selectedItemType) {
      // Update the inner HTML of the 'item-details' element with the selected item's details
      document.getElementById('item-details').innerHTML = `
          <div class='item-img'>
              <img src="${selectedItem[4]}" alt="${selectedItem[0]}">
          </div>
          <div class="items-contents">
              <h3>${selectedItem[0]} - ${selectedItem[1]}</h3>
              <p>${selectedItem[2]}</p>
              <p>${selectedItem[3]}</p>
              <div class='btn'>
                  <button id="buyButton">Buy</button>
              </div>
          </div>
      `;

      // Add an event listener to the Buy button
      document.getElementById('buyButton').addEventListener('click', function() {
          // Add the selected item to the cart when the Buy button is clicked
          addToCart(selectedItem);
          // Alert the user that the item has been added to the cart
          alert(`Added ${selectedItem[0]} - ${selectedItem[1]} to the cart.`);
      });
  } else {
      // Display a message if no product is found
      document.getElementById('item-details').innerHTML = `<p>Product not found.</p>`;
  }
};
