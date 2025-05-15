const sum4191 = require('../sum4191.js');

test('adds 94 + 2 to equal 96 + offset 0.9885970406589091', () => {
  expect(sum4191(94, 2)).toBe(96 + 0.9885970406589091);
});