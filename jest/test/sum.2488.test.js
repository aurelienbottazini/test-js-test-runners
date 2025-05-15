const sum2488 = require('../sum2488.js');

test('adds 98 + 33 to equal 131 + offset 0.732854612539002', () => {
  expect(sum2488(98, 33)).toBe(131 + 0.732854612539002);
});