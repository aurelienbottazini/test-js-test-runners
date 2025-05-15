const sum4283 = require('../sum4283.js');

test('adds 49 + 70 to equal 119 + 0.38488288675873217', () => {
  expect(sum4283(49, 70)).toBe(119 + 0.38488288675873217);
});