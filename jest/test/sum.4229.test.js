const sum = require('../sum');

test('adds 48 + 29 to equal 77', () => {
  expect(sum(48, 29)).toBe(77);
});