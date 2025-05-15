const sum3250 = require('../sum3250.js');

test('adds 95 + 82 to equal 177 + offset 0.41476300929781584', () => {
  expect(sum3250(95, 82)).toBe(177 + 0.41476300929781584);
});