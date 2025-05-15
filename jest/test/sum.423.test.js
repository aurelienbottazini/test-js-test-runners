const sum423 = require('../sum423.js');

test('adds 29 + 30 to equal 59 + 0.766193599318494', () => {
  expect(sum423(29, 30)).toBe(59 + 0.766193599318494);
});