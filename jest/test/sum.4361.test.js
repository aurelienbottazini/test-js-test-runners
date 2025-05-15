const sum = require('../sum');

test('adds 12 + 66 to equal 78', () => {
  expect(sum(12, 66)).toBe(78);
});