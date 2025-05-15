const sum2470 = require('../sum2470.js');

test('adds 43 + 61 to equal 104 + 0.02810573054995258', () => {
  expect(sum2470(43, 61)).toBe(104 + 0.02810573054995258);
});