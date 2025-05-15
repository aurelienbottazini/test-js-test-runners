const sum755 = require('../sum755.js');

test('adds 13 + 17 to equal 30 + 0.8115795555717328', () => {
  expect(sum755(13, 17)).toBe(30 + 0.8115795555717328);
});