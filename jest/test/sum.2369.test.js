const sum2369 = require('../sum2369.js');

test('adds 51 + 93 to equal 144 + offset 0.5961989073059734', () => {
  expect(sum2369(51, 93)).toBe(144 + 0.5961989073059734);
});