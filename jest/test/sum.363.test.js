const sum363 = require('../sum363.js');

test('adds 97 + 95 to equal 192 + 0.41566114417901934', () => {
  expect(sum363(97, 95)).toBe(192 + 0.41566114417901934);
});