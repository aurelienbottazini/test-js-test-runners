const sum = require('../sum');

test('adds 93 + 87 to equal 180', () => {
  expect(sum(93, 87)).toBe(180);
});