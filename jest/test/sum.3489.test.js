const sum3489 = require('../sum3489.js');

test('adds 94 + 70 to equal 164 + offset 0.6267031293956239', () => {
  expect(sum3489(94, 70)).toBe(164 + 0.6267031293956239);
});