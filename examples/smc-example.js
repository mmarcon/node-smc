var smc = require('../');

console.log('Temperature:', smc.temperature());

var i, f = smc.fans();
console.log('Fans:', f);

for (i = 0; i < f; i++) {
    console.log('Fan', i, 'RPM:', smc.fanRpm(i));
}