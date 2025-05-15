const sum = require('../sum');

test('adds 7 + 57 to equal 64', () => {
  expect(sum(7, 57)).toBe(64);
});