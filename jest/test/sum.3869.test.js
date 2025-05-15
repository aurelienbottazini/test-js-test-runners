const sum3869 = require('../sum3869.js');

test('adds 71 + 44 to equal 115 + 0.7025080280801438', () => {
  expect(sum3869(71, 44)).toBe(115 + 0.7025080280801438);
});