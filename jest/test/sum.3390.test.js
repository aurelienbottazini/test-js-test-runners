const sum3390 = require('../sum3390.js');

test('adds 74 + 72 to equal 146 + offset 0.21030475966072792', () => {
  expect(sum3390(74, 72)).toBe(146 + 0.21030475966072792);
});