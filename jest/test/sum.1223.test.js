const sum1223 = require('../sum1223.js');

test('adds 51 + 74 to equal 125 + offset 0.7165704427141748', () => {
  expect(sum1223(51, 74)).toBe(125 + 0.7165704427141748);
});