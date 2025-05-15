const sum3789 = require('../sum3789.js');

test('adds 77 + 38 to equal 115 + 0.40193054211107204', () => {
  expect(sum3789(77, 38)).toBe(115 + 0.40193054211107204);
});