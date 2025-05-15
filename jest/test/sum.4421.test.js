const sum4421 = require('../sum4421.js');

test('adds 86 + 93 to equal 179 + 0.5382802161522953', () => {
  expect(sum4421(86, 93)).toBe(179 + 0.5382802161522953);
});