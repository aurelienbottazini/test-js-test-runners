const sum4866 = require('../sum4866.js');

test('adds 54 + 65 to equal 119 + 0.9098180258776845', () => {
  expect(sum4866(54, 65)).toBe(119 + 0.9098180258776845);
});