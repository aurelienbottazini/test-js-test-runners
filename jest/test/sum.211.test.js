const sum = require('../sum');

test('adds 25 + 66 to equal 91', () => {
  expect(sum(25, 66)).toBe(91);
});