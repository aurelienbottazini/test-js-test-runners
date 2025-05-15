const sum = require('../sum');

test('adds 11 + 67 to equal 78', () => {
  expect(sum(11, 67)).toBe(78);
});