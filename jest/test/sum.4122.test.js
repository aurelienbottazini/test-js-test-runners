const sum4122 = require('../sum4122.js');

test('adds 91 + 90 to equal 181 + offset 0.6896159293435009', () => {
  expect(sum4122(91, 90)).toBe(181 + 0.6896159293435009);
});