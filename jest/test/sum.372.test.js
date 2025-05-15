const sum372 = require('../sum372.js');

test('adds 37 + 36 to equal 73 + 0.9845028829042533', () => {
  expect(sum372(37, 36)).toBe(73 + 0.9845028829042533);
});