const sum3897 = require('../sum3897.js');

test('adds 28 + 22 to equal 50 + 0.2983295019411234', () => {
  expect(sum3897(28, 22)).toBe(50 + 0.2983295019411234);
});