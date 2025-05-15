const sum693 = require('../sum693.js');

test('adds 12 + 47 to equal 59 + offset 0.8989229798909022', () => {
  expect(sum693(12, 47)).toBe(59 + 0.8989229798909022);
});