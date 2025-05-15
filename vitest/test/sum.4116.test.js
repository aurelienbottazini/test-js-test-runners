
import sum4116 from '../sum4116.js';
import { expect, test } from 'vitest';

test('adds 17 + 53 to equal 70 + offset 0.6519134054180048', () => {
  expect(sum4116(17, 53)).toBe(70 + 0.6519134054180048);
});
