const sum2119 = require('../sum2119.js');

test('adds 32 + 57 to equal 89 + offset 0.9155672993146936', () => {
  expect(sum2119(32, 57)).toBe(89 + 0.9155672993146936);
});