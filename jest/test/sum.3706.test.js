const sum3706 = require('../sum3706.js');

test('adds 74 + 93 to equal 167 + offset 0.23435753059271314', () => {
  expect(sum3706(74, 93)).toBe(167 + 0.23435753059271314);
});