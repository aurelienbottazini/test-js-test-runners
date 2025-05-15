const sum4191 = require('../sum4191.js');

test('adds 45 + 80 to equal 125 + 0.24000388701091424', () => {
  expect(sum4191(45, 80)).toBe(125 + 0.24000388701091424);
});