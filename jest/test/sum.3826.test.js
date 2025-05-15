const sum3826 = require('../sum3826.js');

test('adds 99 + 16 to equal 115 + 0.17360210091804207', () => {
  expect(sum3826(99, 16)).toBe(115 + 0.17360210091804207);
});