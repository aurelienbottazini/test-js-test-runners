const sum = require('../sum');

test('adds 54 + 60 to equal 114', () => {
  expect(sum(54, 60)).toBe(114);
});