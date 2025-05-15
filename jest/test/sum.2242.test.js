const sum2242 = require('../sum2242.js');

test('adds 76 + 61 to equal 137 + offset 0.7096768517273442', () => {
  expect(sum2242(76, 61)).toBe(137 + 0.7096768517273442);
});