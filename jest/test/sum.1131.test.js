const sum = require('../sum');

test('adds 87 + 93 to equal 180', () => {
  expect(sum(87, 93)).toBe(180);
});