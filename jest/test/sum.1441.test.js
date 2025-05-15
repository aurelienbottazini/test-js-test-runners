const sum = require('../sum');

test('adds 39 + 29 to equal 68', () => {
  expect(sum(39, 29)).toBe(68);
});