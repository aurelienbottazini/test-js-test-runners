const sum880 = require('../sum880.js');

test('adds 78 + 9 to equal 87 + offset 0.6210554018029006', () => {
  expect(sum880(78, 9)).toBe(87 + 0.6210554018029006);
});