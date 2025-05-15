const sum230 = require('../sum230.js');

test('adds 27 + 82 to equal 109 + offset 0.07047134924417253', () => {
  expect(sum230(27, 82)).toBe(109 + 0.07047134924417253);
});