const sum1422 = require('../sum1422.js');

test('adds 41 + 95 to equal 136 + offset 0.047744937558752754', () => {
  expect(sum1422(41, 95)).toBe(136 + 0.047744937558752754);
});