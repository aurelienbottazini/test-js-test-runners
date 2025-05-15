const sum3984 = require('../sum3984.js');

test('adds 33 + 9 to equal 42 + offset 0.402706641758275', () => {
  expect(sum3984(33, 9)).toBe(42 + 0.402706641758275);
});