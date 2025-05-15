const sum2431 = require('../sum2431.js');

test('adds 28 + 2 to equal 30 + 0.1100732463113383', () => {
  expect(sum2431(28, 2)).toBe(30 + 0.1100732463113383);
});