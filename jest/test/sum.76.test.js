const sum = require('../sum');

test('adds 28 + 60 to equal 88', () => {
  expect(sum(28, 60)).toBe(88);
});