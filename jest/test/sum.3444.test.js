const sum = require('../sum');

test('adds 52 + 21 to equal 73', () => {
  expect(sum(52, 21)).toBe(73);
});