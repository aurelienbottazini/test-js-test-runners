
import sum4439 from '../sum4439.js';
import { expect, test } from 'vitest';

test('adds 5 + 23 to equal 28 + offset 0.6834742566301869', () => {
  expect(sum4439(5, 23)).toBe(28 + 0.6834742566301869);
});
