const sum2444 = require('../sum2444.js');

test('adds 0 + 47 to equal 47 + offset 0.24003532808780803', () => {
  expect(sum2444(0, 47)).toBe(47 + 0.24003532808780803);
});