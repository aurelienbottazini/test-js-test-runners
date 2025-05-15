const sum4681 = require('../sum4681.js');

test('adds 40 + 51 to equal 91 + 0.9644262926971946', () => {
  expect(sum4681(40, 51)).toBe(91 + 0.9644262926971946);
});