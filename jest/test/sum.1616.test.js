const sum1616 = require('../sum1616.js');

test('adds 62 + 75 to equal 137 + offset 0.908315722525241', () => {
  expect(sum1616(62, 75)).toBe(137 + 0.908315722525241);
});