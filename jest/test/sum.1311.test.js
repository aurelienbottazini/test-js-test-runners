const sum1311 = require('../sum1311.js');

test('adds 65 + 93 to equal 158 + offset 0.8016390227692232', () => {
  expect(sum1311(65, 93)).toBe(158 + 0.8016390227692232);
});