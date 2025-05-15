const sum844 = require('../sum844.js');

test('adds 25 + 75 to equal 100 + offset 0.6064131382070611', () => {
  expect(sum844(25, 75)).toBe(100 + 0.6064131382070611);
});