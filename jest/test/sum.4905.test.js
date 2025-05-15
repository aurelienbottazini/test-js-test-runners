const sum4905 = require('../sum4905.js');

test('adds 49 + 34 to equal 83 + offset 0.9411182217857036', () => {
  expect(sum4905(49, 34)).toBe(83 + 0.9411182217857036);
});