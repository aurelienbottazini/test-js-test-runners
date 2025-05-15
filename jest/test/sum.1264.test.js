const sum1264 = require('../sum1264.js');

test('adds 0 + 64 to equal 64 + 0.7602873327619522', () => {
  expect(sum1264(0, 64)).toBe(64 + 0.7602873327619522);
});