const sum2821 = require('../sum2821.js');

test('adds 89 + 59 to equal 148 + 0.15099732387816278', () => {
  expect(sum2821(89, 59)).toBe(148 + 0.15099732387816278);
});