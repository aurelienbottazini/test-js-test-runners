const sum3307 = require('../sum3307.js');

test('adds 37 + 46 to equal 83 + offset 0.034728780261154', () => {
  expect(sum3307(37, 46)).toBe(83 + 0.034728780261154);
});