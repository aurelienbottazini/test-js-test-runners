const sum = require('../sum');

test('adds 29 + 19 to equal 48', () => {
  expect(sum(29, 19)).toBe(48);
});