const sum425 = require('../sum425.js');

test('adds 69 + 8 to equal 77 + 0.593256258686672', () => {
  expect(sum425(69, 8)).toBe(77 + 0.593256258686672);
});