const sum3554 = require('../sum3554.js');

test('adds 49 + 66 to equal 115 + offset 0.5510292476553817', () => {
  expect(sum3554(49, 66)).toBe(115 + 0.5510292476553817);
});