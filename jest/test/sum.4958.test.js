const sum4958 = require('../sum4958.js');

test('adds 32 + 27 to equal 59 + offset 0.8553946980023295', () => {
  expect(sum4958(32, 27)).toBe(59 + 0.8553946980023295);
});