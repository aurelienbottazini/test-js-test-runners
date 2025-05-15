const sum1649 = require('../sum1649.js');

test('adds 84 + 90 to equal 174 + offset 0.10091378171085008', () => {
  expect(sum1649(84, 90)).toBe(174 + 0.10091378171085008);
});