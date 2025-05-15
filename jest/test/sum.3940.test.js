const sum3940 = require('../sum3940.js');

test('adds 49 + 20 to equal 69 + 0.42673315170454673', () => {
  expect(sum3940(49, 20)).toBe(69 + 0.42673315170454673);
});