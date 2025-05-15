const sum863 = require('../sum863.js');

test('adds 26 + 3 to equal 29 + 0.7025580371373369', () => {
  expect(sum863(26, 3)).toBe(29 + 0.7025580371373369);
});