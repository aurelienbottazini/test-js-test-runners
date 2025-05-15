const sum4190 = require('../sum4190.js');

test('adds 64 + 74 to equal 138 + 0.6007918726067404', () => {
  expect(sum4190(64, 74)).toBe(138 + 0.6007918726067404);
});