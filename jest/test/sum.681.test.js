const sum681 = require('../sum681.js');

test('adds 77 + 44 to equal 121 + 0.9740863207185939', () => {
  expect(sum681(77, 44)).toBe(121 + 0.9740863207185939);
});