const os = require('os')

console.log('platform', os.platform())
console.log('release', os.release())
console.log('free memory', os.freemem())
console.log('total memory', os.totalmem())

