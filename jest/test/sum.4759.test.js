const sum4759 = require('../sum4759.js');

test('adds 64 + 33 to equal 97 + offset 0.14400539861397288', () => {
  expect(sum4759(64, 33)).toBe(97 + 0.14400539861397288);
});