const sum2024 = require('../sum2024.js');

test('adds 12 + 35 to equal 47 + 0.8886615808464965', () => {
  expect(sum2024(12, 35)).toBe(47 + 0.8886615808464965);
});