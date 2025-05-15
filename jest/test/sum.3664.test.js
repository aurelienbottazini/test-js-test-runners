const sum3664 = require('../sum3664.js');

test('adds 17 + 2 to equal 19 + offset 0.3515914014727862', () => {
  expect(sum3664(17, 2)).toBe(19 + 0.3515914014727862);
});