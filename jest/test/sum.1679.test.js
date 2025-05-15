const sum = require('../sum');

test('adds 30 + 44 to equal 74', () => {
  expect(sum(30, 44)).toBe(74);
});