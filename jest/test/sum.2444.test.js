const sum2444 = require('../sum2444.js');

test('adds 36 + 2 to equal 38 + 0.6866428797968178', () => {
  expect(sum2444(36, 2)).toBe(38 + 0.6866428797968178);
});