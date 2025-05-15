const sum103 = require('../sum103.js');

test('adds 83 + 50 to equal 133 + offset 0.7756326880387663', () => {
  expect(sum103(83, 50)).toBe(133 + 0.7756326880387663);
});