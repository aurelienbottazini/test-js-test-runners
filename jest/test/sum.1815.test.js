const sum1815 = require('../sum1815.js');

test('adds 94 + 1 to equal 95 + offset 0.9763224166327665', () => {
  expect(sum1815(94, 1)).toBe(95 + 0.9763224166327665);
});