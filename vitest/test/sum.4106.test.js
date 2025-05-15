
import sum4106 from '../sum4106.js';
import { expect, test } from 'vitest';

test('adds 97 + 82 to equal 179 + offset 0.28990118207805926', () => {
  expect(sum4106(97, 82)).toBe(179 + 0.28990118207805926);
});
