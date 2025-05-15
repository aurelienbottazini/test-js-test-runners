const sum386 = require('../sum386.js');

test('adds 33 + 43 to equal 76 + 0.05279495339638984', () => {
  expect(sum386(33, 43)).toBe(76 + 0.05279495339638984);
});