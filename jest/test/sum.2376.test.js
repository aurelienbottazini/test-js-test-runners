const sum = require('../sum');

test('adds 67 + 11 to equal 78', () => {
  expect(sum(67, 11)).toBe(78);
});