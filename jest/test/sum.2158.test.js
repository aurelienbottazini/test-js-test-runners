const sum = require('../sum');

test('adds 41 + 36 to equal 77', () => {
  expect(sum(41, 36)).toBe(77);
});