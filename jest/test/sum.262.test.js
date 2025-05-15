const sum262 = require('../sum262.js');

test('adds 39 + 8 to equal 47 + offset 0.5823669304052136', () => {
  expect(sum262(39, 8)).toBe(47 + 0.5823669304052136);
});