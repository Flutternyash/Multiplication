// document.write('</tr>');
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     document.write('<td>' + (i*j) + '</td>');
//   }
//   document.write('</tr>');
// }

let table, cell, row, i, j;
table = document.createElement('table');
table.style.textAlign = 'center';
for (let i = 1; i <= 9; i++) {
  row = document.createElement('tr');
  for (let j = 1; j <= 9; j++) {
    cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
    cell.appendChild(document.createTextNode('' + i * j));
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);
