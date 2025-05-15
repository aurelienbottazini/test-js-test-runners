const sum1126 = require('../sum1126.js');

test('adds 45 + 51 to equal 96 + offset 0.19446489526847277', () => {
  expect(sum1126(45, 51)).toBe(96 + 0.19446489526847277);
});