const sum1881 = require('../sum1881.js');

test('adds 26 + 41 to equal 67 + 0.00006606130767217167', () => {
  expect(sum1881(26, 41)).toBe(67 + 0.00006606130767217167);
});