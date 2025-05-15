const sum2675 = require('../sum2675.js');

test('adds 80 + 73 to equal 153 + 0.9399829537959076', () => {
  expect(sum2675(80, 73)).toBe(153 + 0.9399829537959076);
});