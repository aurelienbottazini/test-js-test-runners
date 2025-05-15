const sum = require('../sum');

test('adds 41 + 25 to equal 66', () => {
  expect(sum(41, 25)).toBe(66);
});