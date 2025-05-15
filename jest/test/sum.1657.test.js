const sum = require('../sum');

test('adds 65 + 82 to equal 147', () => {
  expect(sum(65, 82)).toBe(147);
});