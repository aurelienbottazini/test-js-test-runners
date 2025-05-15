const sum4577 = require('../sum4577.js');

test('adds 87 + 64 to equal 151 + offset 0.7183017667467845', () => {
  expect(sum4577(87, 64)).toBe(151 + 0.7183017667467845);
});