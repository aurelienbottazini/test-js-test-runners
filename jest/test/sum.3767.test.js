const sum3767 = require('../sum3767.js');

test('adds 80 + 83 to equal 163 + offset 0.9428642881564181', () => {
  expect(sum3767(80, 83)).toBe(163 + 0.9428642881564181);
});