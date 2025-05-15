const sum = require('../sum');

test('adds 68 + 10 to equal 78', () => {
  expect(sum(68, 10)).toBe(78);
});