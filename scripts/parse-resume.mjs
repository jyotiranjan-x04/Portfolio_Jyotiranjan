import fs from 'node:fs';
import pdf from 'pdf-parse';

const buffer = fs.readFileSync('../../portfolio-assets/Jyotiranjan_Sahoo_Resume.pdf');
const data = await pdf(buffer);
console.log(data.text);
