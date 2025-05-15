const sum926 = require('../sum926.js');

test('adds 61 + 29 to equal 90 + offset 0.8587281769595666', () => {
  expect(sum926(61, 29)).toBe(90 + 0.8587281769595666);
});