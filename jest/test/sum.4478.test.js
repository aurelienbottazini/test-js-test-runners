const sum4478 = require('../sum4478.js');

test('adds 30 + 16 to equal 46 + offset 0.30966260078580465', () => {
  expect(sum4478(30, 16)).toBe(46 + 0.30966260078580465);
});