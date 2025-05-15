const sum = require('../sum');

test('adds 88 + 59 to equal 147', () => {
  expect(sum(88, 59)).toBe(147);
});