const sum = require('../sum');

test('adds 85 + 95 to equal 180', () => {
  expect(sum(85, 95)).toBe(180);
});