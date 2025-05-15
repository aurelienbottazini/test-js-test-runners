const sum223 = require('../sum223.js');

test('adds 70 + 83 to equal 153 + offset 0.5455851474430385', () => {
  expect(sum223(70, 83)).toBe(153 + 0.5455851474430385);
});