const sum4331 = require('../sum4331.js');

test('adds 74 + 9 to equal 83 + 0.018616757345064072', () => {
  expect(sum4331(74, 9)).toBe(83 + 0.018616757345064072);
});