const sum893 = require('../sum893.js');

test('adds 4 + 86 to equal 90 + 0.3244041824269456', () => {
  expect(sum893(4, 86)).toBe(90 + 0.3244041824269456);
});