const sum = require('../sum');

test('adds 2 + 76 to equal 78', () => {
  expect(sum(2, 76)).toBe(78);
});