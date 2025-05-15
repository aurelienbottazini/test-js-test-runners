const sum4610 = require('../sum4610.js');

test('adds 75 + 60 to equal 135 + offset 0.9493889402059388', () => {
  expect(sum4610(75, 60)).toBe(135 + 0.9493889402059388);
});