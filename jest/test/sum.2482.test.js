const sum2482 = require('../sum2482.js');

test('adds 37 + 26 to equal 63 + 0.3689134699109029', () => {
  expect(sum2482(37, 26)).toBe(63 + 0.3689134699109029);
});