const sum4263 = require('../sum4263.js');

test('adds 6 + 62 to equal 68 + offset 0.8163319078730892', () => {
  expect(sum4263(6, 62)).toBe(68 + 0.8163319078730892);
});