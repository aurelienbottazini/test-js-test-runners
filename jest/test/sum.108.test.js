const sum = require('../sum');

test('adds 75 + 60 to equal 135', () => {
  expect(sum(75, 60)).toBe(135);
});