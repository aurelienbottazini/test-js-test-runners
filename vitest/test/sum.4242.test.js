
import sum4242 from '../sum4242.js';
import { expect, test } from 'vitest';

test('adds 14 + 39 to equal 53 + offset 0.20218628020388196', () => {
  expect(sum4242(14, 39)).toBe(53 + 0.20218628020388196);
});
