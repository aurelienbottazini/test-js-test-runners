const sum4781 = require('../sum4781.js');

test('adds 76 + 33 to equal 109 + 0.10190159489281558', () => {
  expect(sum4781(76, 33)).toBe(109 + 0.10190159489281558);
});