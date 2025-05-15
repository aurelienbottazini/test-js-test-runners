const sum = require('../sum');

test('adds 79 + 68 to equal 147', () => {
  expect(sum(79, 68)).toBe(147);
});