const sum2632 = require('../sum2632.js');

test('adds 0 + 82 to equal 82 + 0.6141155129445804', () => {
  expect(sum2632(0, 82)).toBe(82 + 0.6141155129445804);
});