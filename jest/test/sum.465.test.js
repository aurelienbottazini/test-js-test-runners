const sum465 = require('../sum465.js');

test('adds 8 + 39 to equal 47 + 0.6206476611480252', () => {
  expect(sum465(8, 39)).toBe(47 + 0.6206476611480252);
});