const sum1736 = require('../sum1736.js');

test('adds 97 + 35 to equal 132 + offset 0.5185264530149145', () => {
  expect(sum1736(97, 35)).toBe(132 + 0.5185264530149145);
});