const sum4444 = require('../sum4444.js');

test('adds 97 + 14 to equal 111 + offset 0.49468095972446813', () => {
  expect(sum4444(97, 14)).toBe(111 + 0.49468095972446813);
});