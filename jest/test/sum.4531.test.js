const sum4531 = require('../sum4531.js');

test('adds 98 + 34 to equal 132 + 0.44325910371781885', () => {
  expect(sum4531(98, 34)).toBe(132 + 0.44325910371781885);
});