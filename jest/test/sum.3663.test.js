const sum3663 = require('../sum3663.js');

test('adds 55 + 44 to equal 99 + offset 0.552484326804394', () => {
  expect(sum3663(55, 44)).toBe(99 + 0.552484326804394);
});