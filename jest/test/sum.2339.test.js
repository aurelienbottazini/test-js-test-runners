const sum2339 = require('../sum2339.js');

test('adds 2 + 19 to equal 21 + 0.007647659073819368', () => {
  expect(sum2339(2, 19)).toBe(21 + 0.007647659073819368);
});