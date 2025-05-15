const sum = require('../sum');

test('adds 4 + 60 to equal 64', () => {
  expect(sum(4, 60)).toBe(64);
});