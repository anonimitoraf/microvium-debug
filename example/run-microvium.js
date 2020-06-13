// Assumes that microvium is linked locally
const { VirtualMachineFriendly } = require('microvium');
const fs = require('fs');
const path = require('path');

const program = path.join(__dirname, 'script.mvms');

const vm = new VirtualMachineFriendly(
  undefined,
  {},
  {
    debugConfiguration: {
      port: 10_000
    }
  });
vm.evaluateModule({
  sourceText: fs.readFileSync(program, 'utf8'),
  debugFilename: program
});
console.log('Done')