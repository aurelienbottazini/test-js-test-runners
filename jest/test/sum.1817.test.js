const sum1817 = require('../sum1817.js');

test('adds 36 + 65 to equal 101 + offset 0.5377338518366439', () => {
  expect(sum1817(36, 65)).toBe(101 + 0.5377338518366439);
});