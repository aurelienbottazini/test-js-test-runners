const sum3798 = require('../sum3798.js');

test('adds 44 + 4 to equal 48 + 0.4428827835959044', () => {
  expect(sum3798(44, 4)).toBe(48 + 0.4428827835959044);
});