const sum4976 = require('../sum4976.js');

test('adds 7 + 30 to equal 37 + 0.9619543157780036', () => {
  expect(sum4976(7, 30)).toBe(37 + 0.9619543157780036);
});