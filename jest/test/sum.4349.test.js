const sum4349 = require('../sum4349.js');

test('adds 24 + 38 to equal 62 + 0.5277815884813007', () => {
  expect(sum4349(24, 38)).toBe(62 + 0.5277815884813007);
});