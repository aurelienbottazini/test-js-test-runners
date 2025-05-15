const sum2610 = require('../sum2610.js');

test('adds 81 + 96 to equal 177 + 0.14866270103999757', () => {
  expect(sum2610(81, 96)).toBe(177 + 0.14866270103999757);
});