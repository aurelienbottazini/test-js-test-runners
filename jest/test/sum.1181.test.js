const sum = require('../sum');

test('adds 64 + 14 to equal 78', () => {
  expect(sum(64, 14)).toBe(78);
});