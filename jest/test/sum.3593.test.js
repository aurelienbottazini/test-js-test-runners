const sum3593 = require('../sum3593.js');

test('adds 99 + 59 to equal 158 + offset 0.9056293376040163', () => {
  expect(sum3593(99, 59)).toBe(158 + 0.9056293376040163);
});