const sum = require('../sum');

test('adds 97 + 83 to equal 180', () => {
  expect(sum(97, 83)).toBe(180);
});