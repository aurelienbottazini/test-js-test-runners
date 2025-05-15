const sum1652 = require('../sum1652.js');

test('adds 18 + 88 to equal 106 + 0.8775661200375389', () => {
  expect(sum1652(18, 88)).toBe(106 + 0.8775661200375389);
});