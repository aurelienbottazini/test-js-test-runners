const sum2882 = require('../sum2882.js');

test('adds 83 + 3 to equal 86 + 0.47625632929436645', () => {
  expect(sum2882(83, 3)).toBe(86 + 0.47625632929436645);
});