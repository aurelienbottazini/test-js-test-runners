const sum4638 = require('../sum4638.js');

test('adds 78 + 93 to equal 171 + 0.5062987471857358', () => {
  expect(sum4638(78, 93)).toBe(171 + 0.5062987471857358);
});