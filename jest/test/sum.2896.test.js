const sum2896 = require('../sum2896.js');

test('adds 5 + 61 to equal 66 + 0.8352426612700795', () => {
  expect(sum2896(5, 61)).toBe(66 + 0.8352426612700795);
});