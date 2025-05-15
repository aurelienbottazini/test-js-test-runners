const sum4677 = require('../sum4677.js');

test('adds 75 + 14 to equal 89 + 0.2820587973254811', () => {
  expect(sum4677(75, 14)).toBe(89 + 0.2820587973254811);
});