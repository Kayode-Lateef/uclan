function displayCart() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const cartContainer = document.getElementById('cartContainer'); // Assuming you have a div with this ID in your HTML

    // Create a table element
    let table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Item</th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
        </tr>`;

    // Append rows to the table for each cart item
    // Reverse the cart array and then append rows to the table for each cart item
    cart.slice().reverse().forEach((item, index) => {
    // cart.forEach((item, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${cart.length - 1 - index}</td>
            <td>
                <img src="${item[4]}" alt="${item[0]}" width="50"> <br>
                <span>${item[1]}</span>
            </td>
            <td>${item[0]}</td>
            <td>${item[3]}</td>`;
    });

    // Clear the previous content and append the new table
    cartContainer.innerHTML = '';
    cartContainer.appendChild(table);
}

displayCart();