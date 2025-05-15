const sum2860 = require('../sum2860.js');

test('adds 53 + 43 to equal 96 + offset 0.6209393108034154', () => {
  expect(sum2860(53, 43)).toBe(96 + 0.6209393108034154);
});