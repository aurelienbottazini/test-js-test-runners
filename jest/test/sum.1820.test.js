const sum1820 = require('../sum1820.js');

test('adds 69 + 78 to equal 147 + 0.28075411815433415', () => {
  expect(sum1820(69, 78)).toBe(147 + 0.28075411815433415);
});