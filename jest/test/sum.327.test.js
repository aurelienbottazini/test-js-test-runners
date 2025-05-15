const sum327 = require('../sum327.js');

test('adds 49 + 33 to equal 82 + 0.4167361574252457', () => {
  expect(sum327(49, 33)).toBe(82 + 0.4167361574252457);
});