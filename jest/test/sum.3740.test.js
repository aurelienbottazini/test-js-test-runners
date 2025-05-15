const sum3740 = require('../sum3740.js');

test('adds 72 + 34 to equal 106 + offset 0.3236444833045088', () => {
  expect(sum3740(72, 34)).toBe(106 + 0.3236444833045088);
});