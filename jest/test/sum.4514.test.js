const sum4514 = require('../sum4514.js');

test('adds 98 + 85 to equal 183 + offset 0.9162868005069987', () => {
  expect(sum4514(98, 85)).toBe(183 + 0.9162868005069987);
});