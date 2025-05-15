const sum3914 = require('../sum3914.js');

test('adds 94 + 73 to equal 167 + offset 0.20303195644973748', () => {
  expect(sum3914(94, 73)).toBe(167 + 0.20303195644973748);
});