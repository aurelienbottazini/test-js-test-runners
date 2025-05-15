const sum3058 = require('../sum3058.js');

test('adds 82 + 95 to equal 177 + 0.5421243518942911', () => {
  expect(sum3058(82, 95)).toBe(177 + 0.5421243518942911);
});