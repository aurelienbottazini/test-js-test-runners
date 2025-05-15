
import sum3291 from '../sum3291.js';
import { expect, test } from 'vitest';

test('adds 17 + 35 to equal 52 + offset 0.8459068160492886', () => {
  expect(sum3291(17, 35)).toBe(52 + 0.8459068160492886);
});
