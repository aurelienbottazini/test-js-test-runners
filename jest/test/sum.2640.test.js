const sum2640 = require('../sum2640.js');

test('adds 5 + 80 to equal 85 + 0.9482083561163703', () => {
  expect(sum2640(5, 80)).toBe(85 + 0.9482083561163703);
});