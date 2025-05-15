const sum2464 = require('../sum2464.js');

test('adds 21 + 30 to equal 51 + 0.3498512656516397', () => {
  expect(sum2464(21, 30)).toBe(51 + 0.3498512656516397);
});