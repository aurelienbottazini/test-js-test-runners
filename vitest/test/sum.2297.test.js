
import sum2297 from '../sum2297.js';
import { expect, test } from 'vitest';

test('adds 7 + 47 to equal 54 + offset 0.010186721558157474', () => {
  expect(sum2297(7, 47)).toBe(54 + 0.010186721558157474);
});
