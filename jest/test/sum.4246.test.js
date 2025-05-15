const sum4246 = require('../sum4246.js');

test('adds 7 + 74 to equal 81 + 0.14565617371619533', () => {
  expect(sum4246(7, 74)).toBe(81 + 0.14565617371619533);
});