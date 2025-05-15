const sum681 = require('../sum681.js');

test('adds 83 + 64 to equal 147 + offset 0.06808011248081147', () => {
  expect(sum681(83, 64)).toBe(147 + 0.06808011248081147);
});