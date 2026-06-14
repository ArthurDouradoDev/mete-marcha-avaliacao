const fs = require('fs');
const csv = fs.readFileSync('planilha.csv', 'utf8');

const lines = [];
let row = [''];
let inQuotes = false;

for (let i = 0; i < csv.length; i++) {
  const c = csv[i];
  const next = csv[i + 1];
  if (c === '"') {
    if (inQuotes && next === '"') {
      row[row.length - 1] += '"';
      i++;
    } else {
      inQuotes = !inQuotes;
    }
  } else if (c === ',' && !inQuotes) {
    row.push('');
  } else if ((c === '\r' || c === '\n') && !inQuotes) {
    if (c === '\r' && next === '\n') i++;
    lines.push(row);
    row = [''];
  } else {
    row[row.length - 1] += c;
  }
}
if (row.length > 1 || row[0] !== '') lines.push(row);

// Get only data rows (skip header), filter to ones that have enough columns and have solution content
const dataRows = lines.slice(1).filter(r => r.length > 6 && r[6] && r[6].trim() !== '');
const names = dataRows.map(r => r[0].trim());
console.log(JSON.stringify(names, null, 2));
console.log('\nTotal:', names.length);
