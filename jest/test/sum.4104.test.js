const sum4104 = require('../sum4104.js');

test('adds 18 + 93 to equal 111 + 0.5789716637495999', () => {
  expect(sum4104(18, 93)).toBe(111 + 0.5789716637495999);
});