const sum1765 = require('../sum1765.js');

test('adds 12 + 20 to equal 32 + 0.483849812798567', () => {
  expect(sum1765(12, 20)).toBe(32 + 0.483849812798567);
});