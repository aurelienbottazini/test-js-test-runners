const sum1854 = require('../sum1854.js');

test('adds 50 + 10 to equal 60 + 0.0823445975915037', () => {
  expect(sum1854(50, 10)).toBe(60 + 0.0823445975915037);
});