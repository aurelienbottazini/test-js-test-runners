const sum3941 = require('../sum3941.js');

test('adds 69 + 16 to equal 85 + 0.48009417977852387', () => {
  expect(sum3941(69, 16)).toBe(85 + 0.48009417977852387);
});