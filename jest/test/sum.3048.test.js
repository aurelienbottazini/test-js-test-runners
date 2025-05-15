const sum = require('../sum');

test('adds 41 + 19 to equal 60', () => {
  expect(sum(41, 19)).toBe(60);
});