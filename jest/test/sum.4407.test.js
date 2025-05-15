const sum4407 = require('../sum4407.js');

test('adds 81 + 54 to equal 135 + offset 0.809086630729584', () => {
  expect(sum4407(81, 54)).toBe(135 + 0.809086630729584);
});