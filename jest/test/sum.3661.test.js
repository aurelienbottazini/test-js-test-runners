const sum3661 = require('../sum3661.js');

test('adds 16 + 60 to equal 76 + 0.5538398306935101', () => {
  expect(sum3661(16, 60)).toBe(76 + 0.5538398306935101);
});