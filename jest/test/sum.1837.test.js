const sum1837 = require('../sum1837.js');

test('adds 53 + 96 to equal 149 + 0.2879144218868196', () => {
  expect(sum1837(53, 96)).toBe(149 + 0.2879144218868196);
});