const sum2573 = require('../sum2573.js');

test('adds 48 + 82 to equal 130 + offset 0.24929768936787', () => {
  expect(sum2573(48, 82)).toBe(130 + 0.24929768936787);
});