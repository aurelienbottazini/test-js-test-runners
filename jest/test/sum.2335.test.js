const sum2335 = require('../sum2335.js');

test('adds 3 + 19 to equal 22 + 0.7024009876764303', () => {
  expect(sum2335(3, 19)).toBe(22 + 0.7024009876764303);
});