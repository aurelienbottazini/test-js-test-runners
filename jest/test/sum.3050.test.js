const sum3050 = require('../sum3050.js');

test('adds 1 + 82 to equal 83 + offset 0.928376033432084', () => {
  expect(sum3050(1, 82)).toBe(83 + 0.928376033432084);
});