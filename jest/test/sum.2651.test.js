const sum2651 = require('../sum2651.js');

test('adds 54 + 74 to equal 128 + offset 0.10046806016619991', () => {
  expect(sum2651(54, 74)).toBe(128 + 0.10046806016619991);
});