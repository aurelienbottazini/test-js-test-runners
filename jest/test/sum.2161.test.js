const sum2161 = require('../sum2161.js');

test('adds 60 + 94 to equal 154 + offset 0.31590619473264936', () => {
  expect(sum2161(60, 94)).toBe(154 + 0.31590619473264936);
});