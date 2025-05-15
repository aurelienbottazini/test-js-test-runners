const sum2922 = require('../sum2922.js');

test('adds 30 + 70 to equal 100 + offset 0.8002024349865224', () => {
  expect(sum2922(30, 70)).toBe(100 + 0.8002024349865224);
});