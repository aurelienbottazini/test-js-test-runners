const sum2674 = require('../sum2674.js');

test('adds 13 + 22 to equal 35 + offset 0.889189359250779', () => {
  expect(sum2674(13, 22)).toBe(35 + 0.889189359250779);
});