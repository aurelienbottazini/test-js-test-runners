const sum = require('../sum');

test('adds 92 + 88 to equal 180', () => {
  expect(sum(92, 88)).toBe(180);
});