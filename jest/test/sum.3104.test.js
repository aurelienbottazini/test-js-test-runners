const sum3104 = require('../sum3104.js');

test('adds 62 + 43 to equal 105 + offset 0.15360615761965601', () => {
  expect(sum3104(62, 43)).toBe(105 + 0.15360615761965601);
});