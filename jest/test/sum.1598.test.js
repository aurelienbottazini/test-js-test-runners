const sum1598 = require('../sum1598.js');

test('adds 10 + 62 to equal 72 + 0.5664550164053482', () => {
  expect(sum1598(10, 62)).toBe(72 + 0.5664550164053482);
});