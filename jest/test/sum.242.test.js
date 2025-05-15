const sum242 = require('../sum242.js');

test('adds 46 + 52 to equal 98 + offset 0.049497127490502946', () => {
  expect(sum242(46, 52)).toBe(98 + 0.049497127490502946);
});