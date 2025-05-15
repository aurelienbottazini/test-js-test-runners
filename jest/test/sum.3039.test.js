const sum3039 = require('../sum3039.js');

test('adds 14 + 11 to equal 25 + offset 0.06880952979189825', () => {
  expect(sum3039(14, 11)).toBe(25 + 0.06880952979189825);
});