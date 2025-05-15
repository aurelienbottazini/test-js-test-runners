const sum = require('../sum');

test('adds 62 + 64 to equal 126', () => {
  expect(sum(62, 64)).toBe(126);
});