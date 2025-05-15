const sum1659 = require('../sum1659.js');

test('adds 55 + 33 to equal 88 + 0.4132830741579039', () => {
  expect(sum1659(55, 33)).toBe(88 + 0.4132830741579039);
});