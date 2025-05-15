
import sum2130 from '../sum2130.js';
import { expect, test } from 'vitest';

test('adds 46 + 13 to equal 59 + offset 0.857798762330443', () => {
  expect(sum2130(46, 13)).toBe(59 + 0.857798762330443);
});
