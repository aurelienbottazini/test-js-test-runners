const sum3485 = require('../sum3485.js');

test('adds 57 + 76 to equal 133 + 0.5641585293216504', () => {
  expect(sum3485(57, 76)).toBe(133 + 0.5641585293216504);
});