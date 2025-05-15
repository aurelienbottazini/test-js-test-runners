const sum4984 = require('../sum4984.js');

test('adds 15 + 77 to equal 92 + offset 0.582861242005216', () => {
  expect(sum4984(15, 77)).toBe(92 + 0.582861242005216);
});