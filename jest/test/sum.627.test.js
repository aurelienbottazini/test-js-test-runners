const sum627 = require('../sum627.js');

test('adds 57 + 26 to equal 83 + offset 0.7630518769705075', () => {
  expect(sum627(57, 26)).toBe(83 + 0.7630518769705075);
});