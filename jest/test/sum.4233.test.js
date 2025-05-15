const sum4233 = require('../sum4233.js');

test('adds 3 + 52 to equal 55 + 0.3657072615118726', () => {
  expect(sum4233(3, 52)).toBe(55 + 0.3657072615118726);
});