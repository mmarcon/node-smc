var smc = require('./build/Release/smc');

module.exports = {
    temperature: smc.temperature,
    fans: smc.fans,
    fanRpm: smc.fanRpm
};