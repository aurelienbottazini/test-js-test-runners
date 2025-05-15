const sum3927 = require('../sum3927.js');

test('adds 29 + 11 to equal 40 + offset 0.3804151071743819', () => {
  expect(sum3927(29, 11)).toBe(40 + 0.3804151071743819);
});