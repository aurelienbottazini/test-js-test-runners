const sum2926 = require('../sum2926.js');

test('adds 3 + 66 to equal 69 + offset 0.24898023796782298', () => {
  expect(sum2926(3, 66)).toBe(69 + 0.24898023796782298);
});