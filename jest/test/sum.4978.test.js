const sum = require('../sum');

test('adds 50 + 97 to equal 147', () => {
  expect(sum(50, 97)).toBe(147);
});