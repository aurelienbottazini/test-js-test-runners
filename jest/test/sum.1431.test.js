const sum1431 = require('../sum1431.js');

test('adds 80 + 93 to equal 173 + 0.5910020719972122', () => {
  expect(sum1431(80, 93)).toBe(173 + 0.5910020719972122);
});