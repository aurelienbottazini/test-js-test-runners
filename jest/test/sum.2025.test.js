const sum2025 = require('../sum2025.js');

test('adds 94 + 60 to equal 154 + offset 0.8007025294234518', () => {
  expect(sum2025(94, 60)).toBe(154 + 0.8007025294234518);
});