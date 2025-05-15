const sum3516 = require('../sum3516.js');

test('adds 1 + 73 to equal 74 + 0.3080691033060109', () => {
  expect(sum3516(1, 73)).toBe(74 + 0.3080691033060109);
});