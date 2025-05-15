const sum = require('../sum');

test('adds 27 + 33 to equal 60', () => {
  expect(sum(27, 33)).toBe(60);
});