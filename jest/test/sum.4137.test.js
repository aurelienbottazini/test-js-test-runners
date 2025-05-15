const sum = require('../sum');

test('adds 70 + 74 to equal 144', () => {
  expect(sum(70, 74)).toBe(144);
});