const sum790 = require('../sum790.js');

test('adds 84 + 25 to equal 109 + 0.0858406492867625', () => {
  expect(sum790(84, 25)).toBe(109 + 0.0858406492867625);
});