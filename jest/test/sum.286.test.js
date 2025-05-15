const sum286 = require('../sum286.js');

test('adds 36 + 33 to equal 69 + 0.8425310682554525', () => {
  expect(sum286(36, 33)).toBe(69 + 0.8425310682554525);
});