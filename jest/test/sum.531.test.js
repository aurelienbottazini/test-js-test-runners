const sum531 = require('../sum531.js');

test('adds 10 + 50 to equal 60 + 0.15781446554459322', () => {
  expect(sum531(10, 50)).toBe(60 + 0.15781446554459322);
});