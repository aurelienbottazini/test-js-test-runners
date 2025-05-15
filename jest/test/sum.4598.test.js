const sum4598 = require('../sum4598.js');

test('adds 80 + 30 to equal 110 + offset 0.044871991226843155', () => {
  expect(sum4598(80, 30)).toBe(110 + 0.044871991226843155);
});