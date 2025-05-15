const sum4015 = require('../sum4015.js');

test('adds 25 + 31 to equal 56 + offset 0.44247560261738317', () => {
  expect(sum4015(25, 31)).toBe(56 + 0.44247560261738317);
});