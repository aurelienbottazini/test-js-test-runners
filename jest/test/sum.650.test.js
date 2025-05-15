const sum650 = require('../sum650.js');

test('adds 98 + 60 to equal 158 + 0.276987450421725', () => {
  expect(sum650(98, 60)).toBe(158 + 0.276987450421725);
});