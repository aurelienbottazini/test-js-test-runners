const sum3120 = require('../sum3120.js');

test('adds 67 + 75 to equal 142 + offset 0.8857844529728524', () => {
  expect(sum3120(67, 75)).toBe(142 + 0.8857844529728524);
});