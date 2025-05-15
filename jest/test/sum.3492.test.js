const sum3492 = require('../sum3492.js');

test('adds 1 + 49 to equal 50 + 0.9893239174373505', () => {
  expect(sum3492(1, 49)).toBe(50 + 0.9893239174373505);
});