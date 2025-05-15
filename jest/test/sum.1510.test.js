const sum1510 = require('../sum1510.js');

test('adds 94 + 12 to equal 106 + 0.5320344398511996', () => {
  expect(sum1510(94, 12)).toBe(106 + 0.5320344398511996);
});