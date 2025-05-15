const sum2316 = require('../sum2316.js');

test('adds 40 + 51 to equal 91 + 0.5664829588161752', () => {
  expect(sum2316(40, 51)).toBe(91 + 0.5664829588161752);
});