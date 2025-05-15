
import sum1130 from '../sum1130.js';
import { expect, test } from 'vitest';

test('adds 64 + 49 to equal 113 + offset 0.8607721365940968', () => {
  expect(sum1130(64, 49)).toBe(113 + 0.8607721365940968);
});
