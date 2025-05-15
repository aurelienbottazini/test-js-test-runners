const sum = require('../sum');

test('adds 67 + 1 to equal 68', () => {
  expect(sum(67, 1)).toBe(68);
});