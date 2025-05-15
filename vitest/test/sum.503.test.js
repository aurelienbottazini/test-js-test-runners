
import sum503 from '../sum503.js';
import { expect, test } from 'vitest';

test('adds 75 + 13 to equal 88 + offset 0.39834910963381787', () => {
  expect(sum503(75, 13)).toBe(88 + 0.39834910963381787);
});
