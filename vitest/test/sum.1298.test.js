
import sum1298 from '../sum1298.js';
import { expect, test } from 'vitest';

test('adds 24 + 25 to equal 49 + offset 0.535556789256832', () => {
  expect(sum1298(24, 25)).toBe(49 + 0.535556789256832);
});
