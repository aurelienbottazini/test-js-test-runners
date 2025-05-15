const sum2246 = require('../sum2246.js');

test('adds 24 + 13 to equal 37 + 0.5755131914686112', () => {
  expect(sum2246(24, 13)).toBe(37 + 0.5755131914686112);
});