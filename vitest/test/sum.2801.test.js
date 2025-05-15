
import sum2801 from '../sum2801.js';
import { expect, test } from 'vitest';

test('adds 60 + 85 to equal 145 + offset 0.23129766954264352', () => {
  expect(sum2801(60, 85)).toBe(145 + 0.23129766954264352);
});
