const sum1106 = require('../sum1106.js');

test('adds 81 + 38 to equal 119 + 0.4043243876970809', () => {
  expect(sum1106(81, 38)).toBe(119 + 0.4043243876970809);
});