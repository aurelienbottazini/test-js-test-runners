const sum2615 = require('../sum2615.js');

test('adds 52 + 22 to equal 74 + 0.2769508327995005', () => {
  expect(sum2615(52, 22)).toBe(74 + 0.2769508327995005);
});