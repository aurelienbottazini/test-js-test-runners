const sum4314 = require('../sum4314.js');

test('adds 37 + 91 to equal 128 + 0.3425429900214816', () => {
  expect(sum4314(37, 91)).toBe(128 + 0.3425429900214816);
});