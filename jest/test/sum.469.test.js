const sum469 = require('../sum469.js');

test('adds 81 + 31 to equal 112 + offset 0.5651149452379539', () => {
  expect(sum469(81, 31)).toBe(112 + 0.5651149452379539);
});