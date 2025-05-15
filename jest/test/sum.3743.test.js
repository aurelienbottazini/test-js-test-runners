const sum3743 = require('../sum3743.js');

test('adds 77 + 97 to equal 174 + offset 0.2594797011664798', () => {
  expect(sum3743(77, 97)).toBe(174 + 0.2594797011664798);
});