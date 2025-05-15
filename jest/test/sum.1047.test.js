const sum1047 = require('../sum1047.js');

test('adds 79 + 29 to equal 108 + 0.9989395735918932', () => {
  expect(sum1047(79, 29)).toBe(108 + 0.9989395735918932);
});