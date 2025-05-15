
import sum1935 from '../sum1935.js';
import { expect, test } from 'vitest';

test('adds 24 + 51 to equal 75 + offset 0.5165179043986661', () => {
  expect(sum1935(24, 51)).toBe(75 + 0.5165179043986661);
});
