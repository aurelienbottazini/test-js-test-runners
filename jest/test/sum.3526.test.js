const sum = require('../sum');

test('adds 41 + 26 to equal 67', () => {
  expect(sum(41, 26)).toBe(67);
});