const sum = require('../sum');

test('adds 20 + 71 to equal 91', () => {
  expect(sum(20, 71)).toBe(91);
});