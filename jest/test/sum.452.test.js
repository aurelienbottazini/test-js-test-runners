const sum = require('../sum');

test('adds 60 + 18 to equal 78', () => {
  expect(sum(60, 18)).toBe(78);
});