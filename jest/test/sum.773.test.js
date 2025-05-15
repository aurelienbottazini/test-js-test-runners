const sum773 = require('../sum773.js');

test('adds 28 + 80 to equal 108 + 0.8186124957140207', () => {
  expect(sum773(28, 80)).toBe(108 + 0.8186124957140207);
});