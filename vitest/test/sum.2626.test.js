
import sum2626 from '../sum2626.js';
import { expect, test } from 'vitest';

test('adds 92 + 75 to equal 167 + offset 0.955569369058553', () => {
  expect(sum2626(92, 75)).toBe(167 + 0.955569369058553);
});
