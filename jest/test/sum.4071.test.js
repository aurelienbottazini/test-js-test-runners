const sum4071 = require('../sum4071.js');

test('adds 65 + 13 to equal 78 + 0.9787797259237453', () => {
  expect(sum4071(65, 13)).toBe(78 + 0.9787797259237453);
});