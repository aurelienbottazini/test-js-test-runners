const sum1230 = require('../sum1230.js');

test('adds 65 + 62 to equal 127 + offset 0.5542498477960158', () => {
  expect(sum1230(65, 62)).toBe(127 + 0.5542498477960158);
});