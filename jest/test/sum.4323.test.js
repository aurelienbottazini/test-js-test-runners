const sum4323 = require('../sum4323.js');

test('adds 30 + 98 to equal 128 + 0.37622723900948807', () => {
  expect(sum4323(30, 98)).toBe(128 + 0.37622723900948807);
});