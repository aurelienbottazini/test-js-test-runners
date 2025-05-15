const sum985 = require('../sum985.js');

test('adds 68 + 78 to equal 146 + 0.3736502194103528', () => {
  expect(sum985(68, 78)).toBe(146 + 0.3736502194103528);
});