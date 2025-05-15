const sum1608 = require('../sum1608.js');

test('adds 70 + 41 to equal 111 + offset 0.2754976294286804', () => {
  expect(sum1608(70, 41)).toBe(111 + 0.2754976294286804);
});