const sum2769 = require('../sum2769.js');

test('adds 18 + 67 to equal 85 + 0.005052042445689686', () => {
  expect(sum2769(18, 67)).toBe(85 + 0.005052042445689686);
});