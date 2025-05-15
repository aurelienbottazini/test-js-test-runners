const sum353 = require('../sum353.js');

test('adds 17 + 22 to equal 39 + offset 0.28840629729339806', () => {
  expect(sum353(17, 22)).toBe(39 + 0.28840629729339806);
});