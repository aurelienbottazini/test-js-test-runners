const sum = require('../sum');

test('adds 44 + 33 to equal 77', () => {
  expect(sum(44, 33)).toBe(77);
});