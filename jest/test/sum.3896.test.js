const sum3896 = require('../sum3896.js');

test('adds 52 + 92 to equal 144 + offset 0.976604052185589', () => {
  expect(sum3896(52, 92)).toBe(144 + 0.976604052185589);
});