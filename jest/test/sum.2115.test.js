const sum2115 = require('../sum2115.js');

test('adds 6 + 29 to equal 35 + 0.45486249451253713', () => {
  expect(sum2115(6, 29)).toBe(35 + 0.45486249451253713);
});