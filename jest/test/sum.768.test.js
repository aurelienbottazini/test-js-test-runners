const sum768 = require('../sum768.js');

test('adds 54 + 30 to equal 84 + 0.8358081663490521', () => {
  expect(sum768(54, 30)).toBe(84 + 0.8358081663490521);
});