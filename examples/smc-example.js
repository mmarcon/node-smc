var smc = require('../');

Object.keys(smc.metrics).forEach(function(key) {
  var value = smc.get(key);
  if (value > 0) {
    console.log(key, smc.metrics[key]+':', value);
  }
});

var i, f = smc.fans();

for (i = 0; i < f; i++) {
  console.log('F'+i+'Ac', 'Fan', i, 'RPM:', smc.fanRpm(i));
}
