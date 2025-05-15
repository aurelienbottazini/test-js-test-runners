const sum3085 = require('../sum3085.js');

test('adds 9 + 71 to equal 80 + 0.9181918229758982', () => {
  expect(sum3085(9, 71)).toBe(80 + 0.9181918229758982);
});