const sum4080 = require('../sum4080.js');

test('adds 32 + 32 to equal 64 + 0.876311290518593', () => {
  expect(sum4080(32, 32)).toBe(64 + 0.876311290518593);
});