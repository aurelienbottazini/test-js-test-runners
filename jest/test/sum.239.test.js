const sum239 = require('../sum239.js');

test('adds 69 + 83 to equal 152 + offset 0.857652157313006', () => {
  expect(sum239(69, 83)).toBe(152 + 0.857652157313006);
});