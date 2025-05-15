const sum3651 = require('../sum3651.js');

test('adds 13 + 21 to equal 34 + offset 0.8566154002613231', () => {
  expect(sum3651(13, 21)).toBe(34 + 0.8566154002613231);
});