const sum4130 = require('../sum4130.js');

test('adds 5 + 18 to equal 23 + 0.9585224192723245', () => {
  expect(sum4130(5, 18)).toBe(23 + 0.9585224192723245);
});