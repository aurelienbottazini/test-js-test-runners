const sum4597 = require('../sum4597.js');

test('adds 40 + 83 to equal 123 + offset 0.6259209059843228', () => {
  expect(sum4597(40, 83)).toBe(123 + 0.6259209059843228);
});