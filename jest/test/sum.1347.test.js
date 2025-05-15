const sum1347 = require('../sum1347.js');

test('adds 78 + 10 to equal 88 + offset 0.12735473407958464', () => {
  expect(sum1347(78, 10)).toBe(88 + 0.12735473407958464);
});