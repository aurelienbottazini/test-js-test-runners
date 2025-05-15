const sum2169 = require('../sum2169.js');

test('adds 52 + 44 to equal 96 + 0.9852687175333728', () => {
  expect(sum2169(52, 44)).toBe(96 + 0.9852687175333728);
});