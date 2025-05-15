const sum4065 = require('../sum4065.js');

test('adds 59 + 24 to equal 83 + 0.7789863860295341', () => {
  expect(sum4065(59, 24)).toBe(83 + 0.7789863860295341);
});