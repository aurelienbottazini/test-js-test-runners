const sum3422 = require('../sum3422.js');

test('adds 2 + 31 to equal 33 + 0.6567969310922658', () => {
  expect(sum3422(2, 31)).toBe(33 + 0.6567969310922658);
});