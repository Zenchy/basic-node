const fs = require('fs');

fs.writeFile('./texto.txt', 'Primera línea de código', error => error ? error : console.log('Archivo creado'))
fs. readFile('./texto.txt', (err, data)=> err ? console.log('Problema', err.toString()) : console.log('Here is the result:', data.toString()))