const sum4213 = require('../sum4213.js');

test('adds 32 + 47 to equal 79 + offset 0.31827383865679704', () => {
  expect(sum4213(32, 47)).toBe(79 + 0.31827383865679704);
});