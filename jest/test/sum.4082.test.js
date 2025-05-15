const sum4082 = require('../sum4082.js');

test('adds 29 + 27 to equal 56 + 0.4469576468851224', () => {
  expect(sum4082(29, 27)).toBe(56 + 0.4469576468851224);
});