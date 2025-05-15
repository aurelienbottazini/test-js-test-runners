const sum3173 = require('../sum3173.js');

test('adds 22 + 93 to equal 115 + offset 0.787230385755712', () => {
  expect(sum3173(22, 93)).toBe(115 + 0.787230385755712);
});