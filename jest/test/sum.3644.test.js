const sum = require('../sum');

test('adds 83 + 97 to equal 180', () => {
  expect(sum(83, 97)).toBe(180);
});