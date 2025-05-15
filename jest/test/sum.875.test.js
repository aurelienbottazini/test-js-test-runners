const sum875 = require('../sum875.js');

test('adds 71 + 4 to equal 75 + offset 0.3458320975704352', () => {
  expect(sum875(71, 4)).toBe(75 + 0.3458320975704352);
});