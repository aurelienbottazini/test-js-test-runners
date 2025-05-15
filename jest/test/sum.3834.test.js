const sum3834 = require('../sum3834.js');

test('adds 35 + 40 to equal 75 + offset 0.8507317197178854', () => {
  expect(sum3834(35, 40)).toBe(75 + 0.8507317197178854);
});