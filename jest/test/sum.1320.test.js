const sum1320 = require('../sum1320.js');

test('adds 33 + 10 to equal 43 + offset 0.22268348436682406', () => {
  expect(sum1320(33, 10)).toBe(43 + 0.22268348436682406);
});