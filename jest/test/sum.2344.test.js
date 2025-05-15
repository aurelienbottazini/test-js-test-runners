const sum2344 = require('../sum2344.js');

test('adds 91 + 76 to equal 167 + 0.9706573298069563', () => {
  expect(sum2344(91, 76)).toBe(167 + 0.9706573298069563);
});