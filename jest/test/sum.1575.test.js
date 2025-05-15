const sum1575 = require('../sum1575.js');

test('adds 90 + 79 to equal 169 + 0.16104591112573363', () => {
  expect(sum1575(90, 79)).toBe(169 + 0.16104591112573363);
});