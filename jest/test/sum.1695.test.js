const sum1695 = require('../sum1695.js');

test('adds 2 + 91 to equal 93 + offset 0.04442237550443784', () => {
  expect(sum1695(2, 91)).toBe(93 + 0.04442237550443784);
});