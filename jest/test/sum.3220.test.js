const sum = require('../sum');

test('adds 4 + 33 to equal 37', () => {
  expect(sum(4, 33)).toBe(37);
});