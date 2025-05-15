
import sum2365 from '../sum2365.js';
import { expect, test } from 'vitest';

test('adds 47 + 27 to equal 74 + offset 0.5312487761032881', () => {
  expect(sum2365(47, 27)).toBe(74 + 0.5312487761032881);
});
