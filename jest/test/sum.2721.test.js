const sum2721 = require('../sum2721.js');

test('adds 38 + 19 to equal 57 + 0.4197030345426286', () => {
  expect(sum2721(38, 19)).toBe(57 + 0.4197030345426286);
});