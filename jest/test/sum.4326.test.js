const sum4326 = require('../sum4326.js');

test('adds 47 + 78 to equal 125 + 0.3532047167726584', () => {
  expect(sum4326(47, 78)).toBe(125 + 0.3532047167726584);
});