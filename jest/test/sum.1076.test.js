const sum1076 = require('../sum1076.js');

test('adds 15 + 36 to equal 51 + 0.9576508470771606', () => {
  expect(sum1076(15, 36)).toBe(51 + 0.9576508470771606);
});