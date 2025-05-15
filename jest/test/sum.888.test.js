const sum888 = require('../sum888.js');

test('adds 4 + 73 to equal 77 + offset 0.9568887076859429', () => {
  expect(sum888(4, 73)).toBe(77 + 0.9568887076859429);
});