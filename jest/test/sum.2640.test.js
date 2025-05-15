const sum2640 = require('../sum2640.js');

test('adds 75 + 18 to equal 93 + offset 0.6430662030866419', () => {
  expect(sum2640(75, 18)).toBe(93 + 0.6430662030866419);
});