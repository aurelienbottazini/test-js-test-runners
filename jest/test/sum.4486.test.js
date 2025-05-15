const sum4486 = require('../sum4486.js');

test('adds 10 + 87 to equal 97 + offset 0.43825861371906594', () => {
  expect(sum4486(10, 87)).toBe(97 + 0.43825861371906594);
});