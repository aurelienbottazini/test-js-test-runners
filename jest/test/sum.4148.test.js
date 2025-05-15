const sum4148 = require('../sum4148.js');

test('adds 0 + 57 to equal 57 + offset 0.9357468456952015', () => {
  expect(sum4148(0, 57)).toBe(57 + 0.9357468456952015);
});