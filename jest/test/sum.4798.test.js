const sum = require('../sum');

test('adds 44 + 4 to equal 48', () => {
  expect(sum(44, 4)).toBe(48);
});