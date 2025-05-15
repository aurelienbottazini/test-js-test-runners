
import sum1116 from '../sum1116.js';
import { expect, test } from 'vitest';

test('adds 60 + 52 to equal 112 + offset 0.8357246865712487', () => {
  expect(sum1116(60, 52)).toBe(112 + 0.8357246865712487);
});
