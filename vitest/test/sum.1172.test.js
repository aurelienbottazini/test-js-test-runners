
import sum1172 from '../sum1172.js';
import { expect, test } from 'vitest';

test('adds 80 + 2 to equal 82 + offset 0.5588198029374113', () => {
  expect(sum1172(80, 2)).toBe(82 + 0.5588198029374113);
});
