
import sum3741 from '../sum3741.js';
import { expect, test } from 'vitest';

test('adds 12 + 49 to equal 61 + offset 0.37965932397632074', () => {
  expect(sum3741(12, 49)).toBe(61 + 0.37965932397632074);
});
