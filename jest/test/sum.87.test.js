const sum = require('../sum');

test('adds 62 + 95 to equal 157', () => {
  expect(sum(62, 95)).toBe(157);
});