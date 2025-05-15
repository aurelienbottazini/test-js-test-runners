const sum3958 = require('../sum3958.js');

test('adds 65 + 59 to equal 124 + 0.7292776727077243', () => {
  expect(sum3958(65, 59)).toBe(124 + 0.7292776727077243);
});