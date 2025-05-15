const sum3882 = require('../sum3882.js');

test('adds 18 + 4 to equal 22 + 0.8267262244269624', () => {
  expect(sum3882(18, 4)).toBe(22 + 0.8267262244269624);
});