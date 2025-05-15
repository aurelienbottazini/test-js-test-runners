const sum1827 = require('../sum1827.js');

test('adds 45 + 93 to equal 138 + offset 0.1527263798916043', () => {
  expect(sum1827(45, 93)).toBe(138 + 0.1527263798916043);
});