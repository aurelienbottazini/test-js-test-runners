const sum4607 = require('../sum4607.js');

test('adds 10 + 0 to equal 10 + offset 0.6153345728251941', () => {
  expect(sum4607(10, 0)).toBe(10 + 0.6153345728251941);
});