const sum1845 = require('../sum1845.js');

test('adds 11 + 93 to equal 104 + 0.311577276708907', () => {
  expect(sum1845(11, 93)).toBe(104 + 0.311577276708907);
});