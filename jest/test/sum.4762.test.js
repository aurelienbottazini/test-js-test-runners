const sum4762 = require('../sum4762.js');

test('adds 39 + 75 to equal 114 + offset 0.41061959381183866', () => {
  expect(sum4762(39, 75)).toBe(114 + 0.41061959381183866);
});