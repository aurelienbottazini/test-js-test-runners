const sum137 = require('../sum137.js');

test('adds 62 + 18 to equal 80 + offset 0.3804676305190896', () => {
  expect(sum137(62, 18)).toBe(80 + 0.3804676305190896);
});