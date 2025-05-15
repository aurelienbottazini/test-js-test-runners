const sum4199 = require('../sum4199.js');

test('adds 81 + 14 to equal 95 + offset 0.7758767843155838', () => {
  expect(sum4199(81, 14)).toBe(95 + 0.7758767843155838);
});