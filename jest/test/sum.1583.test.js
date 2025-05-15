const sum1583 = require('../sum1583.js');

test('adds 74 + 32 to equal 106 + offset 0.5485024908997588', () => {
  expect(sum1583(74, 32)).toBe(106 + 0.5485024908997588);
});