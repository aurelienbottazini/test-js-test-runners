
import sum3766 from '../sum3766.js';
import { expect, test } from 'vitest';

test('adds 48 + 41 to equal 89 + offset 0.9535587886690831', () => {
  expect(sum3766(48, 41)).toBe(89 + 0.9535587886690831);
});
