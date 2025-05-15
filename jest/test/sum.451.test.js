const sum451 = require('../sum451.js');

test('adds 12 + 7 to equal 19 + 0.2711494498740672', () => {
  expect(sum451(12, 7)).toBe(19 + 0.2711494498740672);
});