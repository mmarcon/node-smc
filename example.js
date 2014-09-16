var smc = require('./');

console.log("Temperature:", smc.temperature());
console.log("Fans:", smc.fans());
console.log("Fan RPM:", smc.fanRpm(1));