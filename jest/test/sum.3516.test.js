const sum3516 = require('../sum3516.js');

test('adds 0 + 79 to equal 79 + offset 0.9021176307430411', () => {
  expect(sum3516(0, 79)).toBe(79 + 0.9021176307430411);
});