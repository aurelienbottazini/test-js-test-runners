const sum598 = require('../sum598.js');

test('adds 69 + 5 to equal 74 + offset 0.8004656369204339', () => {
  expect(sum598(69, 5)).toBe(74 + 0.8004656369204339);
});