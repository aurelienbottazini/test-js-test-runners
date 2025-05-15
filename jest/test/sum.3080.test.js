const sum3080 = require('../sum3080.js');

test('adds 35 + 20 to equal 55 + offset 0.7817135630531802', () => {
  expect(sum3080(35, 20)).toBe(55 + 0.7817135630531802);
});