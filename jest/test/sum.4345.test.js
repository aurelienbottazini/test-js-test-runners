const sum4345 = require('../sum4345.js');

test('adds 51 + 51 to equal 102 + offset 0.8468276105854893', () => {
  expect(sum4345(51, 51)).toBe(102 + 0.8468276105854893);
});