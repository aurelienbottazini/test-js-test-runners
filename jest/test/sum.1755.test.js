const sum1755 = require('../sum1755.js');

test('adds 42 + 49 to equal 91 + offset 0.292490166036646', () => {
  expect(sum1755(42, 49)).toBe(91 + 0.292490166036646);
});