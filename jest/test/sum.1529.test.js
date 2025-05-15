const sum1529 = require('../sum1529.js');

test('adds 62 + 16 to equal 78 + 0.9642572994419785', () => {
  expect(sum1529(62, 16)).toBe(78 + 0.9642572994419785);
});