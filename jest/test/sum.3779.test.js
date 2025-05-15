const sum = require('../sum');

test('adds 58 + 60 to equal 118', () => {
  expect(sum(58, 60)).toBe(118);
});