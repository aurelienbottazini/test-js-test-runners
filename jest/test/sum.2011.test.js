const sum2011 = require('../sum2011.js');

test('adds 66 + 95 to equal 161 + 0.056263365054855186', () => {
  expect(sum2011(66, 95)).toBe(161 + 0.056263365054855186);
});