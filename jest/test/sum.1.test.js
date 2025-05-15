const sum = require('../sum');

test('adds 13 + 20 to equal 33', () => {
  expect(sum(13, 20)).toBe(33);
});