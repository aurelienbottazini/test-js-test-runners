const sum149 = require('../sum149.js');

test('adds 55 + 6 to equal 61 + 0.27721928710392907', () => {
  expect(sum149(55, 6)).toBe(61 + 0.27721928710392907);
});