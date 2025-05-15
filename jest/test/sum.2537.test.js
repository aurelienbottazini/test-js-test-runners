const sum = require('../sum');

test('adds 69 + 9 to equal 78', () => {
  expect(sum(69, 9)).toBe(78);
});