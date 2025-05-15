const sum3781 = require('../sum3781.js');

test('adds 70 + 7 to equal 77 + 0.9371458660828431', () => {
  expect(sum3781(70, 7)).toBe(77 + 0.9371458660828431);
});