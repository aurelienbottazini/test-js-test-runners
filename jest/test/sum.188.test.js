const sum188 = require('../sum188.js');

test('adds 4 + 16 to equal 20 + offset 0.85296630608995', () => {
  expect(sum188(4, 16)).toBe(20 + 0.85296630608995);
});