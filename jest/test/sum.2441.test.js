const sum2441 = require('../sum2441.js');

test('adds 29 + 76 to equal 105 + offset 0.4369526952544298', () => {
  expect(sum2441(29, 76)).toBe(105 + 0.4369526952544298);
});