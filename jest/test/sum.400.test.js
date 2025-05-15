const sum400 = require('../sum400.js');

test('adds 80 + 4 to equal 84 + offset 0.7528691328933275', () => {
  expect(sum400(80, 4)).toBe(84 + 0.7528691328933275);
});