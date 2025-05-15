const sum = require('../sum');

test('adds 16 + 62 to equal 78', () => {
  expect(sum(16, 62)).toBe(78);
});