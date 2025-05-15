const sum1711 = require('../sum1711.js');

test('adds 25 + 93 to equal 118 + 0.11009582291187736', () => {
  expect(sum1711(25, 93)).toBe(118 + 0.11009582291187736);
});