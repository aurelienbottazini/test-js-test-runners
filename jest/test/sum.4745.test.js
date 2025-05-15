const sum4745 = require('../sum4745.js');

test('adds 85 + 96 to equal 181 + offset 0.08164658773944755', () => {
  expect(sum4745(85, 96)).toBe(181 + 0.08164658773944755);
});