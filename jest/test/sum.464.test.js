const sum464 = require('../sum464.js');

test('adds 76 + 0 to equal 76 + 0.9036547108574914', () => {
  expect(sum464(76, 0)).toBe(76 + 0.9036547108574914);
});