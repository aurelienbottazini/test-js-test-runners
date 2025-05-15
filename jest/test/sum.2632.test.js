const sum2632 = require('../sum2632.js');

test('adds 56 + 4 to equal 60 + offset 0.9955285064106818', () => {
  expect(sum2632(56, 4)).toBe(60 + 0.9955285064106818);
});