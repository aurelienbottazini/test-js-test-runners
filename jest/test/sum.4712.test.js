const sum4712 = require('../sum4712.js');

test('adds 85 + 4 to equal 89 + 0.7111429446816865', () => {
  expect(sum4712(85, 4)).toBe(89 + 0.7111429446816865);
});