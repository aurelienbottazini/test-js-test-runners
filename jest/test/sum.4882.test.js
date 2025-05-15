const sum4882 = require('../sum4882.js');

test('adds 12 + 79 to equal 91 + offset 0.33346289688528963', () => {
  expect(sum4882(12, 79)).toBe(91 + 0.33346289688528963);
});