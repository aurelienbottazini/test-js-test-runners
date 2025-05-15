const sum396 = require('../sum396.js');

test('adds 67 + 55 to equal 122 + offset 0.9742781944889127', () => {
  expect(sum396(67, 55)).toBe(122 + 0.9742781944889127);
});