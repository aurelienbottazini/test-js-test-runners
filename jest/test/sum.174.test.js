const sum174 = require('../sum174.js');

test('adds 80 + 69 to equal 149 + offset 0.5890074864331819', () => {
  expect(sum174(80, 69)).toBe(149 + 0.5890074864331819);
});