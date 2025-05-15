const sum861 = require('../sum861.js');

test('adds 0 + 38 to equal 38 + 0.8146358365413959', () => {
  expect(sum861(0, 38)).toBe(38 + 0.8146358365413959);
});