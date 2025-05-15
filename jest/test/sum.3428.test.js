const sum3428 = require('../sum3428.js');

test('adds 57 + 65 to equal 122 + 0.5668675475276517', () => {
  expect(sum3428(57, 65)).toBe(122 + 0.5668675475276517);
});