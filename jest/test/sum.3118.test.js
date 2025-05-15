const sum3118 = require('../sum3118.js');

test('adds 17 + 88 to equal 105 + 0.049446554088201755', () => {
  expect(sum3118(17, 88)).toBe(105 + 0.049446554088201755);
});