const sum1571 = require('../sum1571.js');

test('adds 50 + 30 to equal 80 + offset 0.5402404399818125', () => {
  expect(sum1571(50, 30)).toBe(80 + 0.5402404399818125);
});