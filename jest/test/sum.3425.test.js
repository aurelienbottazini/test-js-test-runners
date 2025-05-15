const sum = require('../sum');

test('adds 81 + 74 to equal 155', () => {
  expect(sum(81, 74)).toBe(155);
});