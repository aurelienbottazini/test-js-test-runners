const sum = require('../sum');

test('adds 52 + 22 to equal 74', () => {
  expect(sum(52, 22)).toBe(74);
});