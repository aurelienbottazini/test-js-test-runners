const sum456 = require('../sum456.js');

test('adds 6 + 9 to equal 15 + 0.31318286419345953', () => {
  expect(sum456(6, 9)).toBe(15 + 0.31318286419345953);
});