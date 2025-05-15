const sum3682 = require('../sum3682.js');

test('adds 41 + 42 to equal 83 + 0.812061999779563', () => {
  expect(sum3682(41, 42)).toBe(83 + 0.812061999779563);
});