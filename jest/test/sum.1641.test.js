const sum1641 = require('../sum1641.js');

test('adds 53 + 26 to equal 79 + offset 0.37545176399502034', () => {
  expect(sum1641(53, 26)).toBe(79 + 0.37545176399502034);
});