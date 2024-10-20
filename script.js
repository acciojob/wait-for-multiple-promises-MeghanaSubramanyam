function createPromise() {
  return new Promise((resolve) => {
    let time = Math.random() * 3000;
    setTimeout(() => resolve(time), time);
  });
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

let start = Date.now();
Promise.all([promise1, promise2, promise3])
.then((times) => {
  let end = Date.now();
  let totalTime = (end - start) / 1000;

  console.log(`Promise 1 resolved in ${times[0]/1000} seconds`);
  console.log(`Promise 2 resolved in ${times[1]/1000} seconds`);
  console.log(`Promise 3 resolved in ${times[2]/1000} seconds`);

  let output = document.getElementById('output');

  // Remove the "Loading..." row
  output.innerHTML = '';

  // Add a new row for each promise
  for (let i = 0; i < times.length; i++) {
    let row = document.createElement('tr');
    
    let nameCell = document.createElement('td');
    nameCell.textContent = `Promise ${i + 1}`;
    row.appendChild(nameCell);
    
    let timeCell = document.createElement('td');
    timeCell.textContent = times[i] / 1000;
    row.appendChild(timeCell);
    
    output.appendChild(row);
  }

  // Add a row for the total time
  let totalRow = document.createElement('tr');

  let totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';
  totalRow.appendChild(totalNameCell);

  let totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = totalTime;
  totalRow.appendChild(totalTimeCell);

  output.appendChild(totalRow);
});