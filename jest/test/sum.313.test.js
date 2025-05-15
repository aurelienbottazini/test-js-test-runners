const sum313 = require('../sum313.js');

test('adds 65 + 96 to equal 161 + offset 0.19571165838187687', () => {
  expect(sum313(65, 96)).toBe(161 + 0.19571165838187687);
});