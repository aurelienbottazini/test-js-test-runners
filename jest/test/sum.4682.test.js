const sum4682 = require('../sum4682.js');

test('adds 88 + 10 to equal 98 + offset 0.19432208364840742', () => {
  expect(sum4682(88, 10)).toBe(98 + 0.19432208364840742);
});