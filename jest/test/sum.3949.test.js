const sum3949 = require('../sum3949.js');

test('adds 84 + 42 to equal 126 + 0.012527551308422091', () => {
  expect(sum3949(84, 42)).toBe(126 + 0.012527551308422091);
});