const sum = require('../sum');

test('adds 53 + 21 to equal 74', () => {
  expect(sum(53, 21)).toBe(74);
});