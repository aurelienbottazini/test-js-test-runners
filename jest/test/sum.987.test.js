const sum987 = require('../sum987.js');

test('adds 80 + 91 to equal 171 + 0.9956813877505812', () => {
  expect(sum987(80, 91)).toBe(171 + 0.9956813877505812);
});