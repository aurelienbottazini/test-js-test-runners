const sum959 = require('../sum959.js');

test('adds 65 + 34 to equal 99 + offset 0.6637570067436086', () => {
  expect(sum959(65, 34)).toBe(99 + 0.6637570067436086);
});