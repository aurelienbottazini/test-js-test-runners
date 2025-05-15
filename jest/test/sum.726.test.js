const sum726 = require('../sum726.js');

test('adds 89 + 76 to equal 165 + 0.26587657933473274', () => {
  expect(sum726(89, 76)).toBe(165 + 0.26587657933473274);
});