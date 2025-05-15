const sum279 = require('../sum279.js');

test('adds 80 + 85 to equal 165 + 0.8001670664983465', () => {
  expect(sum279(80, 85)).toBe(165 + 0.8001670664983465);
});