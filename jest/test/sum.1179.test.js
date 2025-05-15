const sum1179 = require('../sum1179.js');

test('adds 4 + 27 to equal 31 + offset 0.33139468415805295', () => {
  expect(sum1179(4, 27)).toBe(31 + 0.33139468415805295);
});