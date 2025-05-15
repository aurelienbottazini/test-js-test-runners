
import sum3887 from '../sum3887.js';
import { expect, test } from 'vitest';

test('adds 2 + 18 to equal 20 + offset 0.22773028206192814', () => {
  expect(sum3887(2, 18)).toBe(20 + 0.22773028206192814);
});
