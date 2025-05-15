const sum3083 = require('../sum3083.js');

test('adds 97 + 9 to equal 106 + 0.2995198528097224', () => {
  expect(sum3083(97, 9)).toBe(106 + 0.2995198528097224);
});