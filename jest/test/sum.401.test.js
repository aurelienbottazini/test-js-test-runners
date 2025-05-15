const sum401 = require('../sum401.js');

test('adds 40 + 8 to equal 48 + offset 0.8063193244651952', () => {
  expect(sum401(40, 8)).toBe(48 + 0.8063193244651952);
});