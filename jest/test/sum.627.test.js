const sum627 = require('../sum627.js');

test('adds 2 + 15 to equal 17 + 0.9489124801851172', () => {
  expect(sum627(2, 15)).toBe(17 + 0.9489124801851172);
});