const sum3115 = require('../sum3115.js');

test('adds 18 + 21 to equal 39 + 0.03623772351704513', () => {
  expect(sum3115(18, 21)).toBe(39 + 0.03623772351704513);
});