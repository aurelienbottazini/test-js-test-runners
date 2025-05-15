const sum1609 = require('../sum1609.js');

test('adds 67 + 9 to equal 76 + offset 0.484082557104922', () => {
  expect(sum1609(67, 9)).toBe(76 + 0.484082557104922);
});