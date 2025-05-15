const sum198 = require('../sum198.js');

test('adds 17 + 67 to equal 84 + offset 0.26295432583716916', () => {
  expect(sum198(17, 67)).toBe(84 + 0.26295432583716916);
});