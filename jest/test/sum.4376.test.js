const sum4376 = require('../sum4376.js');

test('adds 56 + 24 to equal 80 + offset 0.9673819962294601', () => {
  expect(sum4376(56, 24)).toBe(80 + 0.9673819962294601);
});