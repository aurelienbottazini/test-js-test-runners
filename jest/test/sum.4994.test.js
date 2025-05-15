const sum4994 = require('../sum4994.js');

test('adds 26 + 75 to equal 101 + 0.8000886809412051', () => {
  expect(sum4994(26, 75)).toBe(101 + 0.8000886809412051);
});