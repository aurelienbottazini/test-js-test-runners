
import sum2942 from '../sum2942.js';
import { expect, test } from 'vitest';

test('adds 36 + 41 to equal 77 + offset 0.43687133207186846', () => {
  expect(sum2942(36, 41)).toBe(77 + 0.43687133207186846);
});
