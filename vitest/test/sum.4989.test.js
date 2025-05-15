
import sum4989 from '../sum4989.js';
import { expect, test } from 'vitest';

test('adds 59 + 69 to equal 128 + offset 0.7774828583518887', () => {
  expect(sum4989(59, 69)).toBe(128 + 0.7774828583518887);
});
