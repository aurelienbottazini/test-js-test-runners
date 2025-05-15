
import sum1802 from '../sum1802.js';
import { expect, test } from 'vitest';

test('adds 20 + 27 to equal 47 + offset 0.39008189290979367', () => {
  expect(sum1802(20, 27)).toBe(47 + 0.39008189290979367);
});
