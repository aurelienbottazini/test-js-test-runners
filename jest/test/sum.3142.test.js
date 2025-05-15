const sum3142 = require('../sum3142.js');

test('adds 39 + 21 to equal 60 + offset 0.3247498289495184', () => {
  expect(sum3142(39, 21)).toBe(60 + 0.3247498289495184);
});