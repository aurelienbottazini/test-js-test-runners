const sum3572 = require('../sum3572.js');

test('adds 99 + 61 to equal 160 + offset 0.7054388319720054', () => {
  expect(sum3572(99, 61)).toBe(160 + 0.7054388319720054);
});