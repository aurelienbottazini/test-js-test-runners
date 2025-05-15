const sum34 = require('../sum34.js');

test('adds 73 + 43 to equal 116 + 0.10303959635163817', () => {
  expect(sum34(73, 43)).toBe(116 + 0.10303959635163817);
});