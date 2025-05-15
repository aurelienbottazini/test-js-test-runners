const sum878 = require('../sum878.js');

test('adds 70 + 83 to equal 153 + offset 0.879803122349351', () => {
  expect(sum878(70, 83)).toBe(153 + 0.879803122349351);
});