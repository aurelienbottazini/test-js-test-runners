const sum1316 = require('../sum1316.js');

test('adds 83 + 12 to equal 95 + offset 0.5268377422185183', () => {
  expect(sum1316(83, 12)).toBe(95 + 0.5268377422185183);
});