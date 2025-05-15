const sum3686 = require('../sum3686.js');

test('adds 55 + 67 to equal 122 + offset 0.8060465943328476', () => {
  expect(sum3686(55, 67)).toBe(122 + 0.8060465943328476);
});