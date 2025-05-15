const sum = require('../sum');

test('adds 26 + 60 to equal 86', () => {
  expect(sum(26, 60)).toBe(86);
});