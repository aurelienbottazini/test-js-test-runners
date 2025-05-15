const sum3729 = require('../sum3729.js');

test('adds 77 + 66 to equal 143 + offset 0.9870064944191119', () => {
  expect(sum3729(77, 66)).toBe(143 + 0.9870064944191119);
});