const sum4185 = require('../sum4185.js');

test('adds 83 + 1 to equal 84 + 0.17618989732128365', () => {
  expect(sum4185(83, 1)).toBe(84 + 0.17618989732128365);
});