const sum = require('../sum');

test('adds 15 + 33 to equal 48', () => {
  expect(sum(15, 33)).toBe(48);
});