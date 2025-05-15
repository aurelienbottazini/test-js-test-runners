const sum3836 = require('../sum3836.js');

test('adds 93 + 94 to equal 187 + 0.09048402726686511', () => {
  expect(sum3836(93, 94)).toBe(187 + 0.09048402726686511);
});