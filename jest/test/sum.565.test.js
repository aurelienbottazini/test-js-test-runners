const sum565 = require('../sum565.js');

test('adds 44 + 58 to equal 102 + 0.5212743746159687', () => {
  expect(sum565(44, 58)).toBe(102 + 0.5212743746159687);
});