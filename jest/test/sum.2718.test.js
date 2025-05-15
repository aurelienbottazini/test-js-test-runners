const sum2718 = require('../sum2718.js');

test('adds 9 + 10 to equal 19 + offset 0.8230525034486648', () => {
  expect(sum2718(9, 10)).toBe(19 + 0.8230525034486648);
});