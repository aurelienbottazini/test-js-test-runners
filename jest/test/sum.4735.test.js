const sum4735 = require('../sum4735.js');

test('adds 2 + 75 to equal 77 + offset 0.146955476358668', () => {
  expect(sum4735(2, 75)).toBe(77 + 0.146955476358668);
});