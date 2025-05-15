const sum275 = require('../sum275.js');

test('adds 7 + 36 to equal 43 + 0.444653300841798', () => {
  expect(sum275(7, 36)).toBe(43 + 0.444653300841798);
});