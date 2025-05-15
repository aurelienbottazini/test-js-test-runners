const sum1087 = require('../sum1087.js');

test('adds 25 + 80 to equal 105 + offset 0.8595257182289584', () => {
  expect(sum1087(25, 80)).toBe(105 + 0.8595257182289584);
});