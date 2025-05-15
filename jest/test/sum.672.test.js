const sum672 = require('../sum672.js');

test('adds 56 + 4 to equal 60 + offset 0.4858458039882755', () => {
  expect(sum672(56, 4)).toBe(60 + 0.4858458039882755);
});