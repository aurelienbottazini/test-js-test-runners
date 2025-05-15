const sum1866 = require('../sum1866.js');

test('adds 75 + 80 to equal 155 + 0.909343111435215', () => {
  expect(sum1866(75, 80)).toBe(155 + 0.909343111435215);
});