const sum3306 = require('../sum3306.js');

test('adds 72 + 55 to equal 127 + 0.9399716312080556', () => {
  expect(sum3306(72, 55)).toBe(127 + 0.9399716312080556);
});