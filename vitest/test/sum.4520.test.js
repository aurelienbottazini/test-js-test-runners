
import sum4520 from '../sum4520.js';
import { expect, test } from 'vitest';

test('adds 69 + 28 to equal 97 + offset 0.06915329945885684', () => {
  expect(sum4520(69, 28)).toBe(97 + 0.06915329945885684);
});
