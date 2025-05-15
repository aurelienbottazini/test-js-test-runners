const sum2684 = require('../sum2684.js');

test('adds 70 + 15 to equal 85 + offset 0.08519465058381215', () => {
  expect(sum2684(70, 15)).toBe(85 + 0.08519465058381215);
});