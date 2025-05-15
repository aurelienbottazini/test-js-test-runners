const sum4865 = require('../sum4865.js');

test('adds 19 + 7 to equal 26 + 0.09802785179375328', () => {
  expect(sum4865(19, 7)).toBe(26 + 0.09802785179375328);
});