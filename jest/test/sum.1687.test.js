const sum = require('../sum');

test('adds 95 + 60 to equal 155', () => {
  expect(sum(95, 60)).toBe(155);
});