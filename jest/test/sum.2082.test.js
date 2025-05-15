const sum2082 = require('../sum2082.js');

test('adds 90 + 71 to equal 161 + 0.9457085892781918', () => {
  expect(sum2082(90, 71)).toBe(161 + 0.9457085892781918);
});