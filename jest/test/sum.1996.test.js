const sum1996 = require('../sum1996.js');

test('adds 55 + 90 to equal 145 + offset 0.3467878391758191', () => {
  expect(sum1996(55, 90)).toBe(145 + 0.3467878391758191);
});