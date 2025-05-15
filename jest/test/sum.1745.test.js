const sum1745 = require('../sum1745.js');

test('adds 90 + 65 to equal 155 + offset 0.5890961694908167', () => {
  expect(sum1745(90, 65)).toBe(155 + 0.5890961694908167);
});