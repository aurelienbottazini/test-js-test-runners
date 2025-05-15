const sum3787 = require('../sum3787.js');

test('adds 57 + 47 to equal 104 + 0.5432569236932687', () => {
  expect(sum3787(57, 47)).toBe(104 + 0.5432569236932687);
});