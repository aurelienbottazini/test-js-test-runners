const sum = require('../sum');

test('adds 80 + 60 to equal 140', () => {
  expect(sum(80, 60)).toBe(140);
});