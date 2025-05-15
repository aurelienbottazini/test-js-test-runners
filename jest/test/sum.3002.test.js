const sum3002 = require('../sum3002.js');

test('adds 10 + 0 to equal 10 + 0.8331775432044675', () => {
  expect(sum3002(10, 0)).toBe(10 + 0.8331775432044675);
});