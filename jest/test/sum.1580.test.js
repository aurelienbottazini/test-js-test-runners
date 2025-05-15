const sum1580 = require('../sum1580.js');

test('adds 93 + 92 to equal 185 + 0.5782950623228763', () => {
  expect(sum1580(93, 92)).toBe(185 + 0.5782950623228763);
});