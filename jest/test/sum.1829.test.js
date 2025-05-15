const sum1829 = require('../sum1829.js');

test('adds 27 + 67 to equal 94 + 0.6786562538147222', () => {
  expect(sum1829(27, 67)).toBe(94 + 0.6786562538147222);
});