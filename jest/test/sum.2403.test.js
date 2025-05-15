const sum2403 = require('../sum2403.js');

test('adds 85 + 62 to equal 147 + 0.8981910491597448', () => {
  expect(sum2403(85, 62)).toBe(147 + 0.8981910491597448);
});