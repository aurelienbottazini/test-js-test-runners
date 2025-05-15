const sum = require('../sum');

test('adds 66 + 25 to equal 91', () => {
  expect(sum(66, 25)).toBe(91);
});