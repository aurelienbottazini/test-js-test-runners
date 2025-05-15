const sum2842 = require('../sum2842.js');

test('adds 36 + 76 to equal 112 + 0.4754404905650539', () => {
  expect(sum2842(36, 76)).toBe(112 + 0.4754404905650539);
});