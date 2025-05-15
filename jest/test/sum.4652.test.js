const sum4652 = require('../sum4652.js');

test('adds 42 + 20 to equal 62 + offset 0.5992929639204608', () => {
  expect(sum4652(42, 20)).toBe(62 + 0.5992929639204608);
});