const sum1589 = require('../sum1589.js');

test('adds 5 + 47 to equal 52 + offset 0.864640076837982', () => {
  expect(sum1589(5, 47)).toBe(52 + 0.864640076837982);
});