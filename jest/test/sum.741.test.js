const sum741 = require('../sum741.js');

test('adds 81 + 34 to equal 115 + 0.20440181965066018', () => {
  expect(sum741(81, 34)).toBe(115 + 0.20440181965066018);
});