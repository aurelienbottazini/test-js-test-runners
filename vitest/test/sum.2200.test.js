
import sum2200 from '../sum2200.js';
import { expect, test } from 'vitest';

test('adds 24 + 23 to equal 47 + offset 0.2288384702761327', () => {
  expect(sum2200(24, 23)).toBe(47 + 0.2288384702761327);
});
