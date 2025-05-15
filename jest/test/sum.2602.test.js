const sum2602 = require('../sum2602.js');

test('adds 92 + 71 to equal 163 + 0.6083047030249942', () => {
  expect(sum2602(92, 71)).toBe(163 + 0.6083047030249942);
});