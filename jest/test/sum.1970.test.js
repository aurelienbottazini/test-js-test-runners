const sum1970 = require('../sum1970.js');

test('adds 7 + 96 to equal 103 + 0.11084842629402758', () => {
  expect(sum1970(7, 96)).toBe(103 + 0.11084842629402758);
});