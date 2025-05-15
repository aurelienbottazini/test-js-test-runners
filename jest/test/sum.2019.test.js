const sum2019 = require('../sum2019.js');

test('adds 13 + 97 to equal 110 + 0.855929733450997', () => {
  expect(sum2019(13, 97)).toBe(110 + 0.855929733450997);
});