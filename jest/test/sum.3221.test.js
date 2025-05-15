const sum3221 = require('../sum3221.js');

test('adds 63 + 95 to equal 158 + 0.16695091782509874', () => {
  expect(sum3221(63, 95)).toBe(158 + 0.16695091782509874);
});