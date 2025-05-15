const sum = require('../sum');

test('adds 62 + 32 to equal 94', () => {
  expect(sum(62, 32)).toBe(94);
});