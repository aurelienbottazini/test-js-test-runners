const sum4835 = require('../sum4835.js');

test('adds 32 + 80 to equal 112 + 0.13669475794841723', () => {
  expect(sum4835(32, 80)).toBe(112 + 0.13669475794841723);
});