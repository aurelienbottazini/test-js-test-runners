const sum259 = require('../sum259.js');

test('adds 43 + 61 to equal 104 + offset 0.31823690397133986', () => {
  expect(sum259(43, 61)).toBe(104 + 0.31823690397133986);
});