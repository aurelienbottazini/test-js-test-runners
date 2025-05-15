const sum = require('../sum');

test('adds 83 + 64 to equal 147', () => {
  expect(sum(83, 64)).toBe(147);
});