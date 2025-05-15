
import sum2244 from '../sum2244.js';
import { expect, test } from 'vitest';

test('adds 99 + 43 to equal 142 + offset 0.18093998752449902', () => {
  expect(sum2244(99, 43)).toBe(142 + 0.18093998752449902);
});
