const sum264 = require('../sum264.js');

test('adds 15 + 79 to equal 94 + 0.9553588748699976', () => {
  expect(sum264(15, 79)).toBe(94 + 0.9553588748699976);
});