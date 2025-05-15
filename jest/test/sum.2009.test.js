const sum2009 = require('../sum2009.js');

test('adds 62 + 25 to equal 87 + 0.6811159184614104', () => {
  expect(sum2009(62, 25)).toBe(87 + 0.6811159184614104);
});