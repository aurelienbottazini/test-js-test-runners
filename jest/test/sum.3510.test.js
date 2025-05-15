const sum3510 = require('../sum3510.js');

test('adds 87 + 55 to equal 142 + 0.8477835108586051', () => {
  expect(sum3510(87, 55)).toBe(142 + 0.8477835108586051);
});