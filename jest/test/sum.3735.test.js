const sum3735 = require('../sum3735.js');

test('adds 44 + 46 to equal 90 + 0.36400989655947114', () => {
  expect(sum3735(44, 46)).toBe(90 + 0.36400989655947114);
});