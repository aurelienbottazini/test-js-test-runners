const sum = require('../sum');

test('adds 57 + 90 to equal 147', () => {
  expect(sum(57, 90)).toBe(147);
});