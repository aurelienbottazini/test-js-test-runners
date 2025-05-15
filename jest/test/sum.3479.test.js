const sum3479 = require('../sum3479.js');

test('adds 61 + 25 to equal 86 + 0.045015792691269874', () => {
  expect(sum3479(61, 25)).toBe(86 + 0.045015792691269874);
});