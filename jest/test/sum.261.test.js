const sum261 = require('../sum261.js');

test('adds 13 + 43 to equal 56 + 0.43042363394338745', () => {
  expect(sum261(13, 43)).toBe(56 + 0.43042363394338745);
});