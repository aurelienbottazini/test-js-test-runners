
import sum662 from '../sum662.js';
import { expect, test } from 'vitest';

test('adds 4 + 42 to equal 46 + offset 0.23612622637325797', () => {
  expect(sum662(4, 42)).toBe(46 + 0.23612622637325797);
});
