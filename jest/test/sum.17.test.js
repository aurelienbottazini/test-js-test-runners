const sum17 = require('../sum17.js');

test('adds 60 + 30 to equal 90 + offset 0.13870954002405256', () => {
  expect(sum17(60, 30)).toBe(90 + 0.13870954002405256);
});