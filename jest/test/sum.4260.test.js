const sum4260 = require('../sum4260.js');

test('adds 19 + 23 to equal 42 + offset 0.4453384243624645', () => {
  expect(sum4260(19, 23)).toBe(42 + 0.4453384243624645);
});