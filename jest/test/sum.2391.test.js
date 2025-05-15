const sum2391 = require('../sum2391.js');

test('adds 83 + 43 to equal 126 + 0.8989958003743672', () => {
  expect(sum2391(83, 43)).toBe(126 + 0.8989958003743672);
});