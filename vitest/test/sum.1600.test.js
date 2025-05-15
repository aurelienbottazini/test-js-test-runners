
import sum1600 from '../sum1600.js';
import { expect, test } from 'vitest';

test('adds 60 + 23 to equal 83 + offset 0.1176066099247105', () => {
  expect(sum1600(60, 23)).toBe(83 + 0.1176066099247105);
});
