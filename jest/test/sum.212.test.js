const sum = require('../sum');

test('adds 35 + 25 to equal 60', () => {
  expect(sum(35, 25)).toBe(60);
});