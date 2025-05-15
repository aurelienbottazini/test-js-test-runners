const sum2815 = require('../sum2815.js');

test('adds 79 + 46 to equal 125 + offset 0.4788096849003982', () => {
  expect(sum2815(79, 46)).toBe(125 + 0.4788096849003982);
});