const sum3921 = require('../sum3921.js');

test('adds 39 + 66 to equal 105 + 0.42984230944709045', () => {
  expect(sum3921(39, 66)).toBe(105 + 0.42984230944709045);
});