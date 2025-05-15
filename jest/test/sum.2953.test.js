const sum = require('../sum');

test('adds 34 + 60 to equal 94', () => {
  expect(sum(34, 60)).toBe(94);
});