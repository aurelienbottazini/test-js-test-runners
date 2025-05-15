const sum842 = require('../sum842.js');

test('adds 42 + 18 to equal 60 + offset 0.5536658532677041', () => {
  expect(sum842(42, 18)).toBe(60 + 0.5536658532677041);
});