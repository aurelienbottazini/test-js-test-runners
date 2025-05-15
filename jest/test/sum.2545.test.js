const sum = require('../sum');

test('adds 90 + 90 to equal 180', () => {
  expect(sum(90, 90)).toBe(180);
});