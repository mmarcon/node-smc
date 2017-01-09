# Node SMC

This node module uses [Apple's SMC subsystem](http://en.wikipedia.org/wiki/System_Management_Controller) to query the system for the CPU temperature, number of fans and for each of the fans retrieves the current RPM.

**This packages works on OSX only**.

## Installation

```sh
npm install smc
```

## Example

```javascript
var smc = require('smc');

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
```

On my Macbook Pro this prints out the following:

```
TB0T Battery TS_MAX: 34.59765625
TB1T Battery 1: 34.59765625
TB2T Battery 2: 32.59765625
TCXC PECI CPU: 78.875
TC0E CPU 0 ??: 80.56640625
TC0F CPU 0 ??: 82.16015625
TC0P CPU 0 Proximity: 65.875
TC1C Core 1: 77
TC2C Core 2: 78
TC3C Core 3: 77
TC4C Core 4: 75
TCGC PECI GPU: 78
TCSA PECI SA: 78
Th1H NB/CPU/GPU HeatPipe 1 Proximity: 51.625
TM0P Memory Slot Proximity: 53.125
TM0S Memory Slot 1: 53.1171875
TPCD Platform Controller Hub Die: 57
Ts0P Palm rest L: 32.5
Ts0S Memory Bank Proximity: 40.23046875
TW0P AirPort Proximity: 48.5
F0Ac Fan 0 RPM: 2160
F1Ac Fan 1 RPM: 2001
```

## Credits

Most of the work was done by [Sébastien Lavoie](https://github.com/lavoiesl) in his [osx-cpu-temp](https://github.com/lavoiesl/osx-cpu-temp) code. I just took it and made it into a node module, as it was convenient for me to use it that way.

Additional credit goes to [Hendrik Holtmann](https://github.com/hholtmann), the author of [smcFanControl](https://github.com/hholtmann/smcFanControl) as his code inspired osx-cpu-temp and as I used part of the code of smcFanControl to query the fan speed and format the result.

## License

[GNU General Public License, version 2](http://www.gnu.org/licenses/gpl-2.0.html)

## TODO

Make it asynchronous, as currently everything happens synchronously.
