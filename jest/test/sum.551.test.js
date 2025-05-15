const sum551 = require('../sum551.js');

test('adds 75 + 84 to equal 159 + 0.1273825430033909', () => {
  expect(sum551(75, 84)).toBe(159 + 0.1273825430033909);
});