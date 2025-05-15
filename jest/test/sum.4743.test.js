const sum4743 = require('../sum4743.js');

test('adds 42 + 96 to equal 138 + 0.0806903317105031', () => {
  expect(sum4743(42, 96)).toBe(138 + 0.0806903317105031);
});