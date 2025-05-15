
import sum1630 from '../sum1630.js';
import { expect, test } from 'vitest';

test('adds 8 + 5 to equal 13 + offset 0.5930151402680949', () => {
  expect(sum1630(8, 5)).toBe(13 + 0.5930151402680949);
});
