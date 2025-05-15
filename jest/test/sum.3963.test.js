const sum = require('../sum');

test('adds 45 + 60 to equal 105', () => {
  expect(sum(45, 60)).toBe(105);
});