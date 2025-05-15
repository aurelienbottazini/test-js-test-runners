const sum1065 = require('../sum1065.js');

test('adds 35 + 39 to equal 74 + offset 0.4179703405707429', () => {
  expect(sum1065(35, 39)).toBe(74 + 0.4179703405707429);
});