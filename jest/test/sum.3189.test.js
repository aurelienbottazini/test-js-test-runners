const sum3189 = require('../sum3189.js');

test('adds 24 + 28 to equal 52 + offset 0.7137026557740119', () => {
  expect(sum3189(24, 28)).toBe(52 + 0.7137026557740119);
});