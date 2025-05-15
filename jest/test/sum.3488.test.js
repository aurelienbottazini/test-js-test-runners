const sum3488 = require('../sum3488.js');

test('adds 47 + 88 to equal 135 + offset 0.07124549581388628', () => {
  expect(sum3488(47, 88)).toBe(135 + 0.07124549581388628);
});