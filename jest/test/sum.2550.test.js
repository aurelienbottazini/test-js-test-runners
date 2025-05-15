const sum2550 = require('../sum2550.js');

test('adds 14 + 46 to equal 60 + 0.09070828780300777', () => {
  expect(sum2550(14, 46)).toBe(60 + 0.09070828780300777);
});