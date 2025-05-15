const sum718 = require('../sum718.js');

test('adds 12 + 86 to equal 98 + 0.991399288958717', () => {
  expect(sum718(12, 86)).toBe(98 + 0.991399288958717);
});