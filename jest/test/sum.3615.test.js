const sum3615 = require('../sum3615.js');

test('adds 31 + 30 to equal 61 + 0.4167323661127438', () => {
  expect(sum3615(31, 30)).toBe(61 + 0.4167323661127438);
});