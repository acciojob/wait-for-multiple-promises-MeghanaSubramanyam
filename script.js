const promises = [
  new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  }),
  new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  }),
  new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  })
];

// Create a loading row
const loadingRow = document.createElement('tr');
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';

// Add the loading row to the table
const table = document.getElementById('myTable');
table.appendChild(loadingRow);

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    // Remove the loading row
    table.removeChild(loadingRow);

    // Populate the table with results
    results.forEach((result, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${index + 1}</td><td>${result}</td>`;
      table.appendChild(row);
    });

    // Calculate and add the total time
    const totalTime = results.reduce((acc, val) => acc + val, 0);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    table.appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error:', error);
  });