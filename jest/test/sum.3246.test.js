const sum3246 = require('../sum3246.js');

test('adds 52 + 83 to equal 135 + offset 0.4622172296581941', () => {
  expect(sum3246(52, 83)).toBe(135 + 0.4622172296581941);
});