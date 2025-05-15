const sum3485 = require('../sum3485.js');

test('adds 74 + 66 to equal 140 + offset 0.38081532274622265', () => {
  expect(sum3485(74, 66)).toBe(140 + 0.38081532274622265);
});