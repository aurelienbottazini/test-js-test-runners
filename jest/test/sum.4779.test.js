const sum4779 = require('../sum4779.js');

test('adds 38 + 5 to equal 43 + offset 0.5189467565386797', () => {
  expect(sum4779(38, 5)).toBe(43 + 0.5189467565386797);
});