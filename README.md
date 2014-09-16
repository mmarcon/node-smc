# Node SMC

This node module uses [Apple's SMC subsystem](http://en.wikipedia.org/wiki/System_Management_Controller) to query the system for the CPU temperature, number of fans and for each of the fans retrieves the current RPM.

**This packages works on OSX only**.

## Example

```javascript
var smc = require('node-smc');

console.log('Temperature:', smc.temperature());

var i, f = smc.fans();
console.log('Fans:', f);

for (i = 0; i < f; i++) {
    console.log('Fan', i, 'RPM:', smc.fanRpm(i));
}

```

## Credits

Most of the work was done by [Sébastien Lavoie](https://github.com/lavoiesl) in his [osx-cpu-temp](https://github.com/lavoiesl/osx-cpu-temp) code. I just took it and made it into a node module, as it was convenient for me to use it that way.

Additional credit goes to [Hendrik Holtmann](https://github.com/hholtmann), the author of [smcFanControl](https://github.com/hholtmann/smcFanControl) as his code inspired osx-cpu-temp.

## License

[GNU General Public License, version 2](http://www.gnu.org/licenses/gpl-2.0.html)

## TODO

Make it asynchronous, as currently everything happens synchronously.