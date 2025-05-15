const sum2156 = require('../sum2156.js');

test('adds 65 + 1 to equal 66 + 0.6268098418201161', () => {
  expect(sum2156(65, 1)).toBe(66 + 0.6268098418201161);
});